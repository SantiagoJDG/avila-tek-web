import { PrincipalCard } from "@/components/Home/PrincipalCard";
import { IntegrationTools } from "@/components/Home/IntegrationTools";
import { DataPower } from "@/components/Home/DataPower";
import { Features } from "@/components/Home/Fetaures";
import { TestimonialCard } from "@/components/Home/TestimonialCard";
import { Trial } from "@/components/Home/Trial";
import { FrequentQuestions } from "@/components/Home/FrequentQuestions";
import { Customers } from '@/components/Home/Customers'
import { GetStartedCard } from "@/components/Home/GetStartedCard";

export default function Home() {
  return (
    <>
      <PrincipalCard />
      <IntegrationTools />
      <DataPower />
      <Features />
      <TestimonialCard />
      <Trial />
      <FrequentQuestions />
      <Customers />
      <GetStartedCard/>
    </>
  );
}