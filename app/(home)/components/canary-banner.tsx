import { Button } from "@/components/ui/button";

export default function CanaryBanner() {
  return (
    <div className="bg-[radial-gradient(50%_50%_at_50%_50%,rgba(6,6,6,0.65)_0%,#060606_100%)]">
      <div className="container mx-auto px-4 xl:px-28 text-white bg-canary-image-mobile md:bg-none bg-contain bg-no-repeat bg-right-top">
        <div className="md:bg-canary-image bg-contain bg-no-repeat bg-right-top py-3 md:py-6">
          <h3 className="font-bold md:text-xl">GDL Canary Balanced Fund</h3>
          <p className="text-lg md:text-4xl font-bold text-white my-1">
            63.63% annualised return{" "}
            <span className="md:text-xl font-normal text-white">
              (As of February 9, 2025)
            </span>
          </p>
          <Button variant={"secondary"} className="mt-4 md:mt-8">
            Talk to us
          </Button>
        </div>
      </div>
    </div>
  );
}
