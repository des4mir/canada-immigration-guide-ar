/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import DisclaimerBanner from "./components/DisclaimerBanner";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AdLeaderboard from "./components/AdLeaderboard";
import ImmigrationStreams from "./components/ImmigrationStreams";
import StudyInCanada from "./components/StudyInCanada";
import AdRectangle from "./components/AdRectangle";
import CostOfLiving from "./components/CostOfLiving";
import JobsAndSalaries from "./components/JobsAndSalaries";
import Universities from "./components/Universities";
import Sources from "./components/Sources";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <DisclaimerBanner />
      <Header />
      <main className="flex-1">
        <AdLeaderboard />
        <Hero />
        <ImmigrationStreams />
        <StudyInCanada />
        <AdRectangle />
        <CostOfLiving />
        <JobsAndSalaries />
        <AdRectangle />
        <Universities />
        <Sources />
        <FAQ />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
