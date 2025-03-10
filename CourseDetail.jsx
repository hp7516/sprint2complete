import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

import { BadgeInfo, PlayCircle, Lock } from "lucide-react";
import React from "react";
import ByCourseButton from "@/components/ui/ByCourseButton";

export default function CourseDetail() {
  const purchaseCourse = false; 
  return (
    <div className="mt-20 space-y-5">
      {/* Course Header Section */}
      <div className="bg-[grey] text-dark">
        <div className="max-w-7xl mx-auto py-8 px-4 md:px-8 flex flex-col gap-2">
          <h1>Course Title</h1>
          <p>Course sub-title</p>
          <p>
            Created By{" "}
            <span className="text-[#C0c4FC] underline italic">Harsh Patel</span>
          </p>
          <div className="flex items-center gap-2 text-sm">
            <BadgeInfo size={16} />
            <p>Last Updated 09-03-2025</p>
          </div>
          <p>Students Enrolled: 10</p>
        </div>
      </div>


      <div className="max-w-7xl mx-auto my-5 px-4 md:px-8 flex flex-col lg:flex-row gap-5">
        {/* Course Content */}
        <div className="w-full lg:w-2/3 space-y-5">
          <h1 className="font-bold text-xl md:text-2xl">Description</h1>
          <p>
            This comprehensive course is designed for developers who want to
            learn how to build robust applications.
          </p>

          <Card>
            <CardHeader>
              <CardTitle>Course Content</CardTitle>
              <CardDescription>4 lectures</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {[1, 2, 3].map((_, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm">
                  <span>
                    {true ? <PlayCircle size={14} /> : <Lock size={14} />}
                  </span>
                  <p>Lecture {idx + 1} title</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        
        <div className="w-full lg:w-1/3">
          <Card>
            <CardContent className="p-4 flex flex-col">
              <div className="w-full aspect-video bg-gray-200 flex items-center justify-center text-lg font-semibold">
                Video
              </div>
              <h1>Lecture Title</h1>
              <Separator className="my-2" />
              <h1 className="text-lg md:text-xl font-semibold">Course price</h1>
            </CardContent>
            <CardFooter className="flex justify-center p-4">
           
              {purchaseCourse ? (
                <Button>Continue Course</Button>
              ) : (
                <ByCourseButton/>
               )}
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
