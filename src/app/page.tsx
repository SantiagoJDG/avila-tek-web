import { PrincipalCard } from "@/components/Home/PrincipalCard";
import { IntegrationTools } from "@/components/Home/IntegrationTools";
import { DataPower } from "@/components/Home/DataPower";
import { Features } from "@/components/Home/Fetaures";
import { TestimonialCard } from "@/components/Home/TestimonialCard";
import { Trial } from "@/components/Home/Trial";

export default function Home() {
  return (
    <>
      <PrincipalCard />
      <IntegrationTools />
      <DataPower />
      <Features />
      <TestimonialCard />
      <Trial />
    </>
  );
}