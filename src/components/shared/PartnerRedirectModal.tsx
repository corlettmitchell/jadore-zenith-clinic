import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface PartnerRedirectModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName: string;
  partnerUrl?: string;
}

const PartnerRedirectModal = ({
  isOpen,
  onClose,
  serviceName,
  partnerUrl = "#",
}: PartnerRedirectModalProps) => {
  const handleContinue = () => {
    window.open(partnerUrl, "_blank");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-card border-border">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl text-foreground">
            You're being redirected
          </DialogTitle>
          <DialogDescription className="text-muted-foreground leading-relaxed pt-2">
            Cold Plunge and Infrared Sauna sessions are operated by our onsite 
            wellness partner. You will be redirected to their secure booking portal.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex gap-3 sm:gap-3 mt-4">
          <Button variant="luxury-outline" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="gold" onClick={handleContinue} className="gap-2">
            Continue
            <ExternalLink size={16} />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PartnerRedirectModal;
