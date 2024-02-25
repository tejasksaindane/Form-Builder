"use client";

import { formSchema } from "@/schemas/form";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
// import { InShare } from 'react-icons/in';
import { TbInnerShadowRightFilled } from "react-icons/tb";
import { toast } from "./ui/use-toast";

const FormLinkShare = ({ shareUrl }: { shareUrl: string }) => {
  const [mounted, setMounted] = useState(false);
  const shareLink = `${window.location.origin}/submit/${shareUrl}`;
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; //avoiding the window not defined error
  }

  return (
    <div className="flex flex-grow gap-4 items-center">
      <Input value={shareLink} readOnly />
      <Button
        className="max-w-[250px]"
        onClick={() => {
          navigator.clipboard.writeText(shareLink);
          toast({
              title: "Copy the description",
              description:"Link Copied to ClipBoard"
          });
        }}
      >
        <TbInnerShadowRightFilled className="mr-2 h-4 w-4">
          Share Link
        </TbInnerShadowRightFilled>
      </Button>
    </div>
  );
};

export default FormLinkShare;
