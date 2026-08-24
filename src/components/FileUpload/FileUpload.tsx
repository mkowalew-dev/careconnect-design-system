import clsx from 'clsx';
import type { ChangeEvent, DragEvent } from 'react';
import { useRef, useState } from 'react';
import { Button } from '../Button';
import './FileUpload.css';

export interface FileUploadProps {
  label?: string;
  hint?: string;
  accept?: string;
  multiple?: boolean;
  onFilesSelected?: (files: File[]) => void;
}

export function FileUpload({ label, hint, accept, multiple, onFilesSelected }: FileUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [dragOver, setDragOver] = useState(false);

  const handleFiles = (list: FileList | null) => {
    if (!list?.length) return;
    const next = multiple ? Array.from(list) : [list[0]];
    setFiles(next);
    onFilesSelected?.(next);
  };

  const onDrop = (e: DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    handleFiles(e.dataTransfer.files);
  };

  return (
    <div className="cc-file-upload">
      {label && <span className="cc-file-upload__label">{label}</span>}
      <div
        className={clsx('cc-file-upload__dropzone', dragOver && 'cc-file-upload__dropzone--active')}
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onDrop={onDrop}
        onClick={() => inputRef.current?.click()}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && inputRef.current?.click()}
      >
        <p className="cc-file-upload__prompt">Drop files here or click to browse</p>
        {hint && <p className="cc-file-upload__hint">{hint}</p>}
        <input
          ref={inputRef}
          type="file"
          className="cc-file-upload__input"
          accept={accept}
          multiple={multiple}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleFiles(e.target.files)}
        />
      </div>
      {files.length > 0 && (
        <ul className="cc-file-upload__list">
          {files.map((f) => (
            <li key={`${f.name}-${f.size}`}>{f.name} ({Math.round(f.size / 1024)} KB)</li>
          ))}
        </ul>
      )}
      {files.length > 0 && (
        <Button size="sm" variant="ghost" onClick={() => { setFiles([]); if (inputRef.current) inputRef.current.value = ''; }}>
          Clear
        </Button>
      )}
    </div>
  );
}
