import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Img, Line, Text } from "components";

const AboutPagePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto w-full">
        <div className="font-roboto md:h-[1300px] h-[1318px] md:px-5 relative w-full">
          <div className="md:h-[1300px] h-[1318px] m-auto w-full">
            <div className="md:h-[1300px] h-[1318px] m-auto w-full">
              <Img
                className="absolute h-[1300px] inset-[0] justify-center m-auto object-cover md:w-full"
                src="images/img_hero.png"
                alt="hero"
              />
              <div className="absolute bg-light_green-300 flex md:flex-col flex-row md:gap-10 gap-[251px] inset-x-[0] items-center justify-end mx-auto p-[13px] top-[0] w-full">
                <div className="flex md:flex-1 flex-row gap-[60px] items-start justify-center w-[29%] md:w-full">
                  <Text
                    className="text-gray-800 text-sm"
                    size="txtRobotoRegular14"
                  >
                    Home
                  </Text>
                  <Text
                    className="text-gray-800 text-sm"
                    size="txtRobotoRegular14"
                  >
                    About
                  </Text>
                  <Text
                    className="text-gray-800 text-sm"
                    size="txtRobotoRegular14"
                  >
                    Contact
                  </Text>
                  <Text
                    className="text-gray-800 text-sm"
                    size="txtRobotoRegular14"
                  >
                    Submit An Event
                  </Text>
                </div>
                <div className="flex md:flex-1 flex-row font-inter items-center justify-start mr-[43px] px-3.5 w-[15%] md:w-full">
                  <Img
                    className="h-[29px] md:h-auto object-cover w-[29px]"
                    src="images/img_account1.png"
                    alt="accountOne"
                  />
                  <div className="flex flex-col items-end justify-start">
                    <a
                      href="javascript:"
                      className="text-black-900 text-sm tracking-[-0.98px]"
                    >   <button onClick={()=>navigate('/loginsignup')} style={{ color: '#262626' }}>
                    <Text size="txtInterSemiBold14">Login</Text></button>
                    </a>
                  </div>
                  <div className="flex flex-col items-center justify-start ml-2.5 rounded-[11px] w-[51%]">
                    <div className="bg-green-800 flex flex-col items-center justify-end p-1.5 rounded-[11px] w-full">
                      <a
                        href="javascript:"
                        className="mt-0.5 text-sm text-white-A700 tracking-[-0.98px]"
                      >
                          <button onClick={()=>navigate('/loginsignup')} style={{ color: 'white' }}>
                          <Text size="txtInterSemiBold14WhiteA700">Sign Up</Text>
                      </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute flex flex-col items-start justify-start left-[2%] px-[18px] top-[0] w-[17%]">
              <button onClick={()=>navigate('/')}>
              <Img
                className="h-[118px] md:h-auto object-cover w-[100%]"
                src="images/img_farookflowsquare.png"
                alt="farookflowsquar"
              />
              </button>
            </div>
          </div>
          <Img
            className="absolute h-[1260px] inset-y-[0] my-auto object-cover right-[4%] w-[1260px]"
            src="images/aboutus.png"
            alt="aboutuspagepana"
          />
        </div>
        <Text
          className="mt-[73px] sm:text-[21px] md:text-[23px] text-[25px] text-center text-gray-900 w-[70%] sm:w-full"
          size="txtStapelMedium25"
        >
          <span className="text-gray-900 font-stapel font-medium">
            Welcome to{" "}
          </span>
          <span className="text-green-800_01 font-stapel font-bold">
            farookflow
          </span>
          <span className="text-gray-900 font-stapel font-medium">
            <>
              , your go-to destination for staying informed about upcoming
              events and actively participating in the vibrant community of
              happenings around you. Our platform is not just an event listing
              site; it&#39;s a dynamic space where enthusiasts, organizers, and
              attendees converge.
            </>
          </span>
        </Text>
        <div className="font-stapel md:h-[1814px] sm:h-[2518px] h-[2554px] mt-[156px] md:px-5 relative w-full">
          <div className="flex flex-col h-full items-center justify-start m-auto w-full">
            <div className="flex flex-col md:gap-10 gap-[744px] items-center justify-start w-full">
              <div className="md:h-[798px] h-[905px] pl-[13px] py-[13px] relative w-full">
                <Img
                  className="absolute bottom-[1%] h-[798px] object-cover right-[0] w-[46%]"
                  src="images/discover.png"
                  alt="searchcuateOne"
                />
                <Text
                  className="absolute bottom-[31%] left-[8%] sm:text-[21px] md:text-[23px] text-[25px] text-gray-900 w-[49%] sm:w-full"
                  size="txtStapelMedium25"
                >
                  <>
                    Explore a diverse array of upcoming events ranging from tech
                    meetups and cultural festivals to sports tournaments and
                    educational workshops. Our comprehensive listings ensure
                    that you&#39;re always in the know about the latest and
                    greatest events happening in your area.
                  </>
                </Text>
                <Text
                  className="absolute left-[8%] sm:text-[40px] md:text-[46px] text-[50px] text-gray-900_01 top-[24%]"
                  size="txtStapelBold50"
                >
                  Discover Events
                </Text>
              </div>
              <div className="md:h-[820px] h-[905px] pl-2.5 py-2.5 relative w-full">
                <Text
                  className="absolute bottom-[30%] left-[8%] sm:text-[21px] md:text-[23px] text-[25px] text-gray-900 w-[49%] sm:w-full"
                  size="txtStapelMedium25"
                >
                  Connect with like-minded individuals who share your interests.
                  Engage in discussions, share insights, and build connections
                  within our thriving community. The shared passion for events
                  brings people together, fostering a sense of belonging and
                  excitement.
                </Text>
                <Text
                  className="absolute left-[8%] sm:text-[40px] md:text-[46px] text-[50px] text-gray-900_01 top-1/4"
                  size="txtStapelBold50"
                >
                  Community Engagement
                </Text>
                <Img
                  className="absolute bottom-[1%] h-[820px] object-cover right-[0] w-[48%]"
                  src="images/community.png"
                  alt="communitypanaOne"
                />
              </div>
            </div>
          </div>
          <div className="absolute flex flex-col inset-x-[0] items-start justify-end mx-auto md:pr-10 sm:pr-5 pr-[50px] py-[50px] top-[30%] w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[113px] w-[96%] md:w-full">
              <Img
                className="h-[692px] sm:h-auto object-cover w-[48%] md:w-full"
                src="images/submit.png"
                alt="awholeyearcuate"
              />
              <div className="flex flex-col gap-[43px] items-end justify-start md:mt-0 mt-[54px]">
                <Text
                  className="sm:text-[40px] md:text-[46px] text-[50px] text-gray-900_01 text-right"
                  size="txtStapelBold50"
                >
                  Submit Your Event
                </Text>
                <Text
                  className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900 text-right"
                  size="txtStapelMedium25"
                >
                  <span className="text-gray-900 font-stapel font-medium">
                    Are you an event organizer? Share your passion with the
                    community! Registered users can easily submit their upcoming
                    events, making{" "}
                  </span>
                  <span className="text-green-800 font-stapel text-left font-bold">
                    farookflow
                  </span>
                  <span className="text-gray-900 font-stapel font-medium">
                    <>
                      {" "}
                      a hub for the most exciting and varied gatherings.
                      Showcase your event details, attract a wider audience, and
                      create buzz within our engaged community.
                      <br />                    </>
                  </span>
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-blue-50 flex flex-col font-roboto items-center justify-end mt-[184px] p-[35px] sm:px-5 w-full">
          <div className="flex flex-col items-center justify-start max-w-[1110px] mt-[25px] mx-auto md:px-5 w-full">
            <div className="flex flex-row items-end justify-between w-full">
            <Text
                  className="my-2.5 text-blue_gray-300 text-sm"
                  size="txtRobotoMedium14"
                >
                  ©2023 TinkerhubFC
                </Text>
                <div className="flex flex-col items-center justify-end">
                  <Text
                    className="mt-[3px] md:text-2xl sm:text-[22px] text-[26px] text-green-800"
                    size="txtRobotoBlack26"
                    
                  >
                    farookflow
                  </Text>
                </div>
                <div className="flex flex-col items-center ">
                <Text
                    className="mt-[3px] md:text-2xl sm:text-[22px] text-[10px] text-black-200"
                    size="txtRobotoBlack10"
                    
                  >
                    This website farookflow is a project done by Amna Riyas, Nasha, Irfan Abdul Hameed for the event Stackup held by TInkerhubFC
                  </Text>
                    
                </div>
                <Button className="cursor-pointer font-medium min-w-[109px] my-1.5 text-center text-xs bg-green-800 rounded-[16px]">
                  Submit An Event
                </Button>
              </div>
            <Line className="bg-blue_gray-100 h-px mt-10 w-full" />
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[23px] w-full">
              <div className="flex md:flex-1 flex-row items-center justify-between w-[23%] md:w-full">
                <Text
                  className="text-indigo-200 text-sm"
                  size="txtRobotoRegular14Indigo200"
                >
                  Home
                </Text>
                <Text
                  className="text-indigo-200 text-sm"
                  size="txtRobotoRegular14Indigo200"
                >
                  About
                </Text>
                <Text
                  className="text-indigo-200 text-sm"
                  size="txtRobotoRegular14Indigo200"
                >
                  Contact
                </Text>
              </div>
              <Img
                className="h-4 md:ml-[0] ml-[665px] w-4"
                src="images/img_facebook.svg"
                alt="facebook"
              />
              <Img
                className="h-4 md:ml-[0] ml-[30px] w-4"
                src="images/img_link.svg"
                alt="link"
              />
              <Img
                className="h-4 md:ml-[0] ml-[30px] w-4"
                src="images/img_trash.svg"
                alt="trash"
              />
              <Img
                className="h-4 md:ml-[0] ml-[30px] w-4"
                src="images/img_iconsocialinstagram.svg"
                alt="iconsocialinsta"
              />
              <Img
                className="h-4 md:ml-[0] ml-[30px] w-4"
                src="images/img_info.svg"
                alt="info"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPagePage;
