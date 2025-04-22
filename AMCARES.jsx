
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HeartHandshake, Stethoscope, Globe } from "lucide-react";

export default function AMCARES() {
  return (
    <div className="min-h-screen bg-blue-50 text-gray-800 p-6">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-blue-700">AMCares</h1>
        <p className="mt-4 text-xl max-w-2xl mx-auto">
          Building a bridge of awareness, hope, and healing. AMCares is founded by
          <strong> Shreya Srivastava</strong> to support people in critical medical times and to spread awareness
          about organ donation, including liver, kidney, and heart transplants.
        </p>
      </header>

      <section className="grid md:grid-cols-3 gap-6 mb-12">
        <Card className="bg-white shadow-xl rounded-2xl">
          <CardContent className="p-6 text-center">
            <HeartHandshake className="mx-auto text-blue-600 h-12 w-12 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Organ Donation Awareness</h2>
            <p>
              We aim to educate the public, break myths, and encourage pledging to become life-savers through organ donation.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-xl rounded-2xl">
          <CardContent className="p-6 text-center">
            <Stethoscope className="mx-auto text-blue-600 h-12 w-12 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Medical Support</h2>
            <p>
              AMCares connects patients with transplant centers, doctors, and volunteers when timing is critical and support is needed most.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-xl rounded-2xl">
          <CardContent className="p-6 text-center">
            <Globe className="mx-auto text-blue-600 h-12 w-12 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Community & Campaigns</h2>
            <p>
              We organize awareness drives, donor-recipient stories, and community events to bring people together for a shared cause.
            </p>
          </CardContent>
        </Card>
      </section>

      <div className="text-center">
        <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 rounded-2xl">
          Pledge to Donate
        </Button>
        <p className="mt-4 text-sm text-gray-500">Every pledge is a step toward saving a life. Join the mission today.</p>
      </div>
    </div>
  );
}
