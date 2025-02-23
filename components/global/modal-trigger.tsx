"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

interface ModalTriggerProps {
  id?: string;
  title?: string;
  className?: string;
  trigger: React.ReactNode;
  children: React.ReactNode;
  onCancel?: () => void;
}

export function ModalTrigger({
  trigger,
  className,
  children,
  title,
  onCancel,
}: ModalTriggerProps) {
  const [open, setOpen] = useState(false);

  const handleCancel = () => {
    setOpen(false);
    onCancel?.();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className={`px-12 ${className}`}>
        {title && (
          <DialogHeader className="border-b border-border pb-3">
            <DialogTitle className="text-primary-foreground">
              {title}
            </DialogTitle>
          </DialogHeader>
        )}
        <DialogDescription asChild>{children}</DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
