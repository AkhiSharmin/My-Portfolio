import "./About.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ProgressBar from "@ramonak/react-progress-bar";
import CountUp from "react-countup";

const About = () => {
  return (
    <div className="p-5 relative about" id="about">
      <div>
        <img
          className="absolute left-48 top-64 "
          data-aos="zoom-in-down"
          src="https://i.ibb.co/D7B9JTn/bars12.png"
          alt=""
        />
      </div>
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center p-36">
          <h2 className="text-6xl banner-heading-sub">About Me</h2>
        </div>
        <div className="md:flex justify-center items-center md:space-x-20 p-10">
          <div
            className="flex-1 text-center wrap-image relative"
            data-aos="zoom-in-left"
          >
            <img
              className="text-center inline rounded-2xl"
              src="https://i.ibb.co/19mF0LL/processed-58310c47-4221-4459-88d8-04e29cd3e6d5-Vf-OB2l-A1.jpg"
              alt=""
            />

            <div className="flex items-center text-5xl justify-between bg-white p-5 rounded-2xl w-72 absolute top-2/3 right-10 shadow-xl">
              <p className=" banner-heading-sub text-5xl font-semibold">
                <CountUp start={0} end={50} duration={10} />+
              </p>
              <p className="font-semibold text-slate-400">
                Total <br /> Project
              </p>
            </div>
          </div>
          <div className="flex-1 sm:p-0 px-36 pt-10" data-aos="zoom-in-right">
            <Tabs>
              <TabList>
                <Tab>
                  <h3 className="text-3xl">About me</h3>
                </Tab>
                <Tab>
                  <h3 className="text-3xl">My Skills</h3>
                </Tab>
              </TabList>

              <TabPanel>
                <div className="mt-10">
                  <p className="banner-heading-sub text-4xl">Im a Designer</p>
                  <h3 className="text-6xl capitalize my-5">
                    I can design anything and <br /> develope you want
                  </h3>
                  <p className="text-3xl text-slate-500">
                    I am Sharmin Akhi, a highly skilled and passionate
                    Professional Web Designer with 4+ years of experience. I
                    specialize in PSD to HTML, Bootstrap, Tailwind CSS,
                    JavaScript, React, MongoDB, Node.js, and Firebase. I
                    prioritize effective communication, delivering high-quality
                    work, and providing ongoing support to clients. Lets
                    collaborate and bring your project to life!. <br /> Best
                    regards, <br /> Sharmin Akhi
                  </p>
                  <button className="btn-main mt-10">Hire Me</button>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="mt-10">
                  <div>
                    <h3 className="text-3xl text-[#0078f3]">Html5</h3>
                    <ProgressBar bgColor="#ef00b7" height={15} completed={90} />
                  </div>
                  <div className="my-10">
                    <h3 className="text-3xl text-[#0078f3] ">Css3</h3>
                    <ProgressBar bgColor="#ef00b7" height={15} completed={90} />
                  </div>
                  <div className="mb-10">
                    <h3 className="text-3xl text-[#0078f3]">Javascript</h3>
                    <ProgressBar bgColor="#ef00b7" height={15} completed={80} />
                  </div>
                  <div>
                    <h3 className="text-3xl text-[#0078f3]">React</h3>
                    <ProgressBar bgColor="#ef00b7" height={15} completed={80} />
                  </div>
                  <div className="my-10">
                    <h3 className="text-3xl text-[#0078f3] ">Redux</h3>
                    <ProgressBar bgColor="#ef00b7" height={15} completed={65} />
                  </div>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
