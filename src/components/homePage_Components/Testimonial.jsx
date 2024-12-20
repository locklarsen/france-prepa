import React from "react";
import { Typography } from "@material-tailwind/react";
import LargeVideo from "../general_usage_components/LargeVideo";
import { MDBContainer } from "mdb-react-ui-kit";
import video from "../../../src/assets/videos/video_02.mp4";

const Testimonial = () => {
  return (
    <MDBContainer fluid className="py-2">
      {/* Conteneur principal du témoignage */}
      <div className="bg-white relative flex min-h-fit flex-col justify-center overflow-hidden bg-slate-100 py-1 sm:py-8">
        <div className="max-w-full px-4 sm:px-24 py-4">
          {/* Titre du témoignage */}
          <Typography
            variant="h1"
            className="text-[#00008f] font-[montserrat] uppercase font-bold mb-1 text-3xl dark:text-white sm:text-[40px]/[48px]"
          >
            Nos étudiants témoignent
          </Typography>

          {/* Vidéo de témoignage */}
          <div className="px-1 sm:px-10 md:px-14 lg:px-14 shadow-lg rounded-md">
            <div className="h-fit w-full rounded-xl border-8 border-gray-50 shadow-sm">
              <LargeVideo
                videoSource={video}
                subtitle="Deux (02) de nos étudiants témoignent de leur expérience avec France Prépa Academy."
              />
            </div>
          </div>
        </div>
      </div>
    </MDBContainer>
  );
};

export default Testimonial;
