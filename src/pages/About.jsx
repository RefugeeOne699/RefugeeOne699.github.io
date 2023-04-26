import UI_Group from "../assets/UI_Group.png";
import refugeeOneLogoSmallTransparent from "../assets/refugeeone-logo-small-transparent.png";
import refugeeOneLogoTransparent from "../assets/refugeeone-logo-transparent.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import hifi from "../assets/hifi-small.png";
import wireframe from "../assets/wireframe-small.png";
import styleGuide from "../assets/style-guide.png";
import ImageGallery from "react-image-gallery";
import { useState } from "react";
import r1 from "../assets/r1.png";
import r2 from "../assets/r2.png";
import r3 from "../assets/r3.png";
import e1 from "../assets/e1.png";
import a1 from "../assets/a1.png";
import a2 from "../assets/a2.png";
import techStack from "../assets/tech-stack.png";
import agile from "../assets/agile.png";
import agile_process from "../assets/agile_process.png";

const client_images = [
  {
    original: r1,
    thumbnail: r1,
  },
  {
    original: r2,
    thumbnail: r2,
  },
  {
    original: r3,
    thumbnail: r3,
  },
];

const employer_images = [
  {
    original: e1,
    thumbnail: e1,
  },
];

const admin_images = [
  {
    original: a1,
    thumbnail: a1,
  },
  {
    original: a2,
    thumbnail: a2,
  },
];

export default function About() {
  const [finalDesign, setFinalDesign] = useState("Client");

  const handleFinalDesign = (e) => {
    setFinalDesign(e);
  };

  return (
    <div>
      <div className="hero min-h-screen" style={{ backgroundImage: { UI_Group } }}>
        <div className="hero-overlay bg-opacity-60 h-screen">
          <img
            src={UI_Group}
            className="blur-sm w-full h-full object-fit object-cover"
            alt="UI_Group"
          />
        </div>
        <div className="hero-content text-center text-base-content bg-base-100 rounded-3xl bg-opacity-90 py-12 px-24">
          <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-bold text-base-content">
              RefugeeOne Job Searching Application
            </h1>
            <p className="mb-5">
              SI 699 - User-Centered Agile Development Capstone Project
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://github.com/RefugeeOne699/refugee-one"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn btn-primary flex gap-4">
                  <GitHubIcon />
                  Github
                </button>
              </a>
              <a
                href="https://refugee-one-368a9.web.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn btn-primary flex gap-4">
                  <img src={refugeeOneLogoSmallTransparent} className="max-h-7" />
                  Website
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex justify-center pt-20">
          <div className="max-w-lg">
            <h1 className="text-5xl font-bold">About our client</h1>
            <div className="flex flex-1 pt-10">
              <p className="pr-6"></p>
              <div className="h-[250px] min-h-[1em] w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-20 dark:opacity-100"></div>
              <div className="pl-6 flex flex-col">
                <p className="">
                  <b>RefugeeOne</b> is a non-profit resettlement agency in Chicago that provides
                  services to refugees.
                </p>
                <p>
                  RefugeeOne’s mission is to create opportunity for refugees fleeing war,
                  terror, and persecution to build new lives of safety, dignity, and
                  self-reliance. RefugeeOne’s goal is to provide ways to support and
                  empower refugees to achieve financial stability.
                </p>
              </div>
            </div>
          </div>
      </div> */}
      <div className="flex justify-center mx-12">
        <div className="max-w-2xl">
          <div className="container mt-8">
            <section className="text-base-content">
              <div className="grow-0 shrink-0 basis-auto w-full">
                <div className="pt-6">
                  <h2 className="text-5xl font-bold mb-4">About our client</h2>
                  <p className="text-base-content mb-2">
                    <b>RefugeeOne</b> is a non-profit resettlement agency in Chicago that
                    provides services to refugees.
                  </p>
                  <p className="text-base-content">
                    RefugeeOne's mission is to create opportunity for refugees fleeing
                    war, terror, and persecution to build new lives of safety, dignity,
                    and self-reliance. RefugeeOne's goal is to provide ways to support and
                    empower refugees to achieve financial stability.
                  </p>
                </div>
              </div>
            </section>
          </div>
          <div className="flex justify-center grow-0 shrink-0 basis-auto mt-8">
            <img
              src={refugeeOneLogoTransparent}
              alt="refugeeOneLogoTransparent"
              className="rounded-lg w-1/2"
            />
          </div>
          <div className="container mt-12">
            <section className="mb-6 text-base-content">
              <div className="flex flex-wrap">
                <div className="grow-0 shrink-0 basis-auto w-full mb-6 md:mb-0">
                  <h2 className="text-5xl font-bold mb-6">Problem Statement</h2>

                  <p className="text-base-content mb-6">
                    Refugees need to learn about job opportunities in their area in an
                    interactive, accessible way that will boost employment opportunity
                    within the refugee community. Currently, refugeeOne team is using a
                    google form which populates a google sheet with job site address,
                    starting wage, English level required, basic duties, and more. There
                    are a few drawbacks associated with this approach:
                  </p>
                </div>

                <div className="grow-0 shrink-0 basis-auto w-full mb-6 mb-md-0 px-3">
                  <div className="flex flex-wrap">
                    <div className="grow-0 shrink-0 basis-auto w-full mb-6 px-3">
                      <div className="flex">
                        <div className="shrink-0">
                          <div className="p-4 bg-primary rounded-md shadow-lg">
                            <svg
                              className="w-5 h-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                            >
                              <path
                                fill="currentColor"
                                d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div className="grow ml-4">
                          <p className="font-bold mb-1 text-base-content">
                            Repeated works
                          </p>
                          <p className="text-base-content">
                            RefugeeOne receives many job listings, and it's a challenge to
                            synthesize all the information in a way that is accessible to
                            job seekers.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="grow-0 shrink-0 basis-auto w-full mb-6 px-3">
                      <div className="flex">
                        <div className="shrink-0">
                          <div className="p-4 bg-primary rounded-md shadow-lg">
                            <svg
                              className="w-5 h-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                            >
                              <path
                                fill="currentColor"
                                d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div className="grow ml-4">
                          <p className="font-bold mb-1 text-base-content">
                            High communication cost
                          </p>
                          <p className="text-base-content">
                            Many employers are hesitant to share crucial information like
                            pay rates and shift hours over call or message, which results
                            in increased wait time.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="grow-0 shrink-0 basis-auto w-full mb-6 px-3">
                      <div className="flex">
                        <div className="shrink-0">
                          <div className="p-4 bg-primary rounded-md shadow-lg">
                            <svg
                              className="w-5 h-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 640 512"
                            >
                              <path
                                fill="currentColor"
                                d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H112C85.5 0 64 21.5 64 48v48H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h272c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H40c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H64v128c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div className="grow ml-4">
                          <p className="font-bold mb-1 text-base-content">
                            Time consuming
                          </p>
                          <p className="text-base-content">
                            Sharing job opportunities with refugees in a 1-1 setup is time
                            consuming for RefugeeOne team
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="container mb-8">
            <section className="mb-8 text-base-content">
              <div className="block rounded-lg">
                <h2 className="text-5xl font-bold mb-4">Solution</h2>
                <div className="flex flex-wrap items-center gap-6">
                  <div className="w-full w-6/12">
                    <div className="pb-4">
                      <p className="text-base-content mb-2">
                        Developed an application to streamline process for employers to
                        upload jobs, which is also easily accessible to refugees seeking
                        job opportunities. New workflow will enable refugees to view all
                        job opportunities at one place and understand job requirements
                        like pay rates, geographic locations, shift hours, language
                        requirements, and other information which are often missing from
                        current job postings. This solution will help RefugeeOne members
                        to utilize their time more efficiently by avoiding the need to
                        review job listings 1-1 with each client. Refugees will have more
                        control over the job-search process, and ultimately find better
                        job matches according to their skills and preferences.
                      </p>
                    </div>
                  </div>
                  <div className="flex grow-0 shrink-0 basis-auto w-5/12">
                    <img
                      src={UI_Group}
                      alt="refugeeOneLogoTransparent"
                      className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-x-4">
                  <div className="mb-4">
                    <div className="flex">
                      <div className="shrink-0 mt-1">
                        <svg
                          className="w-4 h-4 text-green-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                          ></path>
                        </svg>
                      </div>
                      <div className="grow ml-4">
                        <p className="font-bold mb-1 text-base-content">
                          Discoverability{" "}
                        </p>
                        <p className="text-base-content">
                          Equal access to information reduces Inequality leading to decent
                          work and economic growth for all.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex">
                      <div className="shrink-0 mt-1">
                        <svg
                          className="w-4 h-4 text-green-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                          ></path>
                        </svg>
                      </div>
                      <div className="grow ml-4">
                        <p className="font-bold mb-1 text-base-content">Flexibility </p>
                        <p className="text-base-content">
                          With more job options listed in one platform, option to
                          shortlist jobs based on individual’s preferences increases.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex">
                      <div className="shrink-0 mt-1">
                        <svg
                          className="w-4 h-4 text-green-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                          ></path>
                        </svg>
                      </div>
                      <div className="grow ml-4">
                        <p className="font-bold mb-1 text-base-content">
                          Time Management
                        </p>
                        <p className="text-base-content">
                          Employers and Admin can utilise their time more efficiently by
                          avoiding the need to review job listings 1-1 with each refugee.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex">
                      <div className="shrink-0 mt-1">
                        <svg
                          className="w-4 h-4 text-green-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                          ></path>
                        </svg>
                      </div>
                      <div className="grow ml-4">
                        <p className="font-bold mb-1 text-base-content">Self Boost</p>
                        <p className="text-base-content">
                          With reduction in poverty, independence & confidence is
                          bolstered.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="container mt-8">
            <section className="text-base-content">
              <div className="grow-0 shrink-0 basis-auto w-full">
                <div className="pt-6">
                  <h2 className="text-5xl font-bold mb-4">UX Research</h2>
                  <p className="text-base-content mb-2">
                    After speaking with the RefugeeOne team and reviewing a UX consulting
                    report conducted with them last year, we have identified three
                    significant findings related to the job search experience of refugees.
                  </p>
                  <ol className="flex flex-col gap-y-2">
                    <li>
                      1. Refugees currently lack autonomy in their job search and must
                      rely on the RefugeeOne Team for assistance. However, such autonomy
                      is important for their future success.
                    </li>
                    <li>
                      2. The current Google Sheet approach to managing job postings is
                      challenging for both refugees and the RefugeeOne team because it is
                      very difficult to search and filter.
                    </li>
                    <li>
                      3. The current Google Sheet approach to managing job postings is
                      challenging for both refugees and the RefugeeOne team because it is
                      very difficult to search and filter.
                    </li>
                  </ol>
                  <p className="text-base-content"></p>
                </div>
              </div>
            </section>
          </div>

          <div className="container mt-8">
            <section className="text-base-content">
              <div className="grow-0 shrink-0 basis-auto w-full">
                <div className="pt-6">
                  <h2 className="text-5xl font-bold mb-4">Brainstorm and Design Spec</h2>
                  <p className="text-base-content mb-2">
                    RefugeeOne's initial request was for a mobile app to assist refugees
                    in their job search as most refugees won't have laptops and their
                    phones are their primary devices.
                  </p>
                  <p className="text-base-content mb-2">
                    However, after conducting further research into the workflow of
                    existing job search websites and gaining a deeper understanding of the
                    needs of refugees, employers, and the RefugeeOne team, we realized
                    that a more effective solution would be to develop a centralized
                    website with tailored features for all three types of user group:
                    client (refugees), employers, and admin (RefugeeOne Team).
                  </p>
                  <p className="text-base-content mb-2">
                    To ensure maximum accessibility for all three users, our team made the
                    decision to create a responsive website that can be accessed from both
                    laptops and phones, rather than an app that would be limited to mobile
                    devices. This approach would provide a seamless user experience across
                    all platforms, allowing refugees to easily search and filter for jobs,
                    employers to easily post job listings, and admins to have full control
                    over job and account management.
                  </p>
                </div>
              </div>
            </section>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3 lg:gap-12">
            <div className="mb-12 md:mb-0 p-4 border-2 border-yellow-500 rounded-3xl">
              <div className="mb-6 flex justify-center bg-yellow-500 rounded-3xl py-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  fill="currentColor"
                  className="bi bi-person-fill text-white"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                </svg>
              </div>
              <h5 className="text-xl font-semibold text-center">Client</h5>
              <h5 className="mb-4 text-xl font-semibold text-center">(Refugee)</h5>
              <div className="mb-4 flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  className="bi bi-phone"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                </svg>
              </div>

              <ul className="mb-4">
                <li> • Check job listing </li>
                <li>
                  • Filter job listing by wage, language level, shift times, distance,
                  etc.
                </li>
                <li> • Save jobs to Favorite </li>
              </ul>
            </div>

            <div className="mb-12 md:mb-0 p-4 border-2 border-orange-500 rounded-3xl">
              <div className="mb-6 flex justify-center bg-orange-500 rounded-3xl py-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  fill="currentColor"
                  className="bi bi-person-badge-fill text-white"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm4.5 0a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm5 2.755C12.146 12.825 10.623 12 8 12s-4.146.826-5 1.755V14a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-.245z" />
                </svg>
              </div>
              <h5 className="text-xl font-semibold text-center">Employer</h5>
              <h5 className="mb-4 text-xl font-semibold text-center">
                {" "}
                <br></br>{" "}
              </h5>
              <div className="mb-4 flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  className="bi bi-laptop"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
                </svg>
              </div>

              <ul className="mb-4">
                <li> • Create job listing </li>
                <li>• Check job listing status from their own dashboard</li>
              </ul>
            </div>

            <div className="mb-12 md:mb-0 p-4 border-2 border-blue-500 rounded-3xl">
              <div className="mb-6 flex justify-center bg-blue-500 rounded-3xl py-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  fill="currentColor"
                  className="bi bi-person-fill-gear text-white"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Zm9.886-3.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382l.045-.148ZM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
                </svg>
              </div>
              <h5 className="text-xl font-semibold text-center">Admin</h5>
              <h5 className="mb-4 text-xl font-semibold text-center">(RefugeeOne)</h5>
              <div className="mb-4 flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  className="bi bi-laptop"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
                </svg>
              </div>

              <ul className="mb-4">
                <li> • Centralized platform for management </li>
                <li> • Manage all types of accounts </li>
                <li> • Approve/ Reject/ Remove job listings </li>
              </ul>
            </div>
          </div>

          <div className="container mt-8">
            <section className="text-base-content">
              <div className="grow-0 shrink-0 basis-auto w-full">
                <div className="pt-6">
                  <h2 className="text-5xl font-bold mb-4">Wireframing</h2>
                  <p className="text-base-content mb-2">
                    With the vision and features in mind, we first developed the
                    wireframes for three types of users and those for general
                    login/signup. This is further iterated from the feedback we got from
                    the RefugeeOne team.
                  </p>
                  <img src={wireframe} alt="wireframe" className="rounded-lg" />
                </div>
              </div>
            </section>
          </div>

          <div className="container mt-8">
            <section className="text-base-content">
              <div className="grow-0 shrink-0 basis-auto w-full">
                <div className="pt-6">
                  <h2 className="text-5xl font-bold mb-4">Style Guide</h2>
                </div>
              </div>
            </section>
          </div>

          <div className="flex justify-center">
            <img src={styleGuide} alt="style guide" className="rounded-lg" />
          </div>

          <div className="container mt-8">
            <section className="text-base-content">
              <div className="grow-0 shrink-0 basis-auto w-full">
                <div className="pt-6">
                  <h2 className="text-5xl font-bold mb-4">High-Fi Prototypes</h2>
                  <p className="text-base-content mb-2">
                    We turned the style guide and the wireframes into higher fidelities
                    and incorporated feedback from RefugeeOne Team into the design as
                    well.
                  </p>
                </div>
              </div>
            </section>
          </div>

          <div className="flex justify-center">
            <img src={hifi} alt="High-Fi Prototypes" className="rounded-lg" />
          </div>

          <div className="container mt-8">
            <section className="text-base-content">
              <div className="grow-0 shrink-0 basis-auto w-full">
                <div className="pt-6">
                  <h2 className="text-5xl font-bold mb-4">Final Design</h2>
                </div>
              </div>
            </section>
          </div>

          <div className="container text-center mt-4">
            <section className="text-base-content">
              <div className="w-full">
                <div className="flex flex-col">
                  <div className="w-full flex flex-row justify-center">
                    <div className="tabs tabs-boxed mb-4">
                      <button
                        className={
                          "tab tab-lg text-3xl" +
                          (finalDesign === "Client" ? " tab-active" : "")
                        }
                        onClick={() => handleFinalDesign("Client")}
                      >
                        Client
                      </button>
                      <button
                        className={
                          "tab tab-lg text-3xl" +
                          (finalDesign === "Employer" ? " tab-active" : "")
                        }
                        onClick={() => handleFinalDesign("Employer")}
                      >
                        Employer
                      </button>
                      <button
                        className={
                          "tab tab-lg text-3xl" +
                          (finalDesign === "Admin" ? " tab-active" : "")
                        }
                        onClick={() => handleFinalDesign("Admin")}
                      >
                        Admin
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    {finalDesign === "Client" ? (
                      <div className="flex flex-col gap-4">
                        <img src={r1} alt="r1" className="rounded-lg bg-white p-4" />
                        <img src={r2} alt="r2" className="rounded-lg bg-white p-4" />
                        <img src={r3} alt="r3" className="rounded-lg bg-white p-4" />
                      </div>
                    ) : finalDesign === "Employer" ? (
                      <div className="flex flex-col gap-4">
                        <img src={e1} alt="e1" className="rounded-lg bg-white p-4" />
                      </div>
                    ) : (
                      <div className="flex flex-col gap-4">
                        <img src={a1} alt="a1" className="rounded-lg bg-white p-4" />
                        <img src={a2} alt="a2" className="rounded-lg bg-white p-4" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="container mt-8">
            <section className="text-base-content">
              <div className="grow-0 shrink-0 basis-auto w-full">
                <div className="pt-6">
                  <h2 className="text-5xl font-bold mb-4">Tech Stack</h2>
                  <div className="container mx-auto">
                    <h2 className="text-2xl font-bold mb-2">Front End</h2>
                    <ul className="list-disc list-inside">
                      <li className="mb-2">
                        <strong className="font-medium">Vite.js:</strong>
                        <span>Fast build speed for dev</span>
                      </li>
                      <li className="mb-2">
                        <strong className="font-medium">React.js:</strong>
                        <span>
                          Zero learning cost for everyone, Low for advanced features
                        </span>
                      </li>
                      <li className="mb-2">
                        <strong className="font-medium">
                          Tailwind CSS &amp; Daisy UI:
                        </strong>
                        <span>CSS-style component library, friendly for beginners</span>
                      </li>
                    </ul>
                    <h2 className="text-2xl font-bold mb-2">Database &amp; Deploy</h2>
                    <ul className="list-disc list-inside">
                      <li className="mb-2">
                        <strong className="font-medium">Firebase Firestore:</strong>
                        <span>Serverless, Zero learning cost for everyone</span>
                      </li>
                      <li className="mb-2">
                        <strong className="font-medium">Firebase Hosting:</strong>
                        <span>Great integration with Firestore &amp; Google API</span>
                      </li>
                    </ul>
                    <h2 className="text-2xl font-bold mb-2">
                      Issue tracker and code repo
                    </h2>
                    <ul className="list-disc list-inside">
                      <li className="mb-2">
                        <strong className="font-medium">Github:</strong>
                        <span>Zero learning cost for everyone, Github Action</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="flex justify-center mt-4">
            <img src={techStack} alt="tech stack" className="rounded-lg" />
          </div>

          <div className="container mt-8">
            <section className="text-base-content">
              <div className="grow-0 shrink-0 basis-auto w-full">
                <div className="pt-6">
                  <h2 className="text-5xl font-bold mb-4">Demo Video</h2>
                </div>
              </div>
            </section>
          </div>

          <div className="flex justify-center mt-4">
            <iframe
              className="w-full"
              height="315"
              src="https://www.youtube.com/embed/YzZrsk8REAc"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="container mt-8">
            <section className="text-base-content">
              <div className="grow-0 shrink-0 basis-auto w-full">
                <div className="pt-6">
                  <h2 className="text-5xl font-bold mb-4">Agile Process</h2>
                  <p className="text-base-content mb-2">
                    Our project followed the agile process of software development. We
                    have completed 4 sprints in total, and we organized all our work in
                    Jira board. There are 6 columns on the board: To Do, In Progress,
                    Blocked, Ready to Review, Deployed/Finished, Done. In each sprint, we
                    define the story points and priorities together in the planning
                    process, and drag them from the backlog to the current sprint. The
                    total points were defined to be consistent with the sprint duration.
                  </p>
                  <img src={agile} alt="agile" className="rounded-lg" />
                  <p className="text-base-content mt-2 mb-2">
                    We held standup meetings every Tuesday, Thursday and Sunday. This was
                    mainly for us to report progress or issues we were stuck at. During
                    the sprint review session, we would show our client the new features
                    described in our user stories before dragging the tickets to Done
                    column. If they proposed new requirements based on our current
                    product, we added new tickets to our Jira board. If there were blocked
                    or in-completed tickets, it would be left to the next sprint.
                  </p>
                  <p className="text-base-content mt-2 mb-2">
                    Overall below image explains our agile process during the course of
                    our product development
                  </p>
                  <img src={agile_process} alt="agile_process" className="rounded-lg" />
                </div>
              </div>
            </section>
          </div>

          <div className="container mt-8">
            <section className="text-base-content">
              <div className="grow-0 shrink-0 basis-auto w-full">
                <div className="pt-6">
                  <h2 className="text-5xl font-bold mb-4">Next Steps</h2>
                  <p className="text-base-content mb-2">
                    In order to further maintain this application, a handoff material is
                    created for our client. This handoff document talks about codebase
                    maintenance, hosting the application, using firebase for
                    authentication and database and others. Our team also developed a job
                    posting for refugeeOne team in order to hire the right person needed
                    to maintain this application.
                  </p>
                  <div className="flex flex-row justify-center gap-8">
                    <a
                      href="https://docs.google.com/document/d/1UDdZZx7P_Z5XfLJa36J2L60Sf-L63VC9Dtzgkam23f4/edit#"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="btn btn-primary flex gap-4">
                        Handoff Material
                      </button>
                    </a>
                    <a
                      href="https://docs.google.com/document/d/1pTuNat0-L4QYsEEK1w0WIhH0SPusULU8/edit"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="btn btn-primary flex gap-4">
                        Job Description
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <footer className="footer footer-center p-4 bg-base-300 text-base-content mt-10">
        <div>
          <img
            src={refugeeOneLogoSmallTransparent}
            alt="refugeeOneLogoSmallTransparent"
            className="w-10 h-10"
          />
          <p>Copyright © 2023 - All right reserved by SI699 RefugeeOne Team</p>
          <p>University of Michigan School of Information</p>
          <p>
            <a href="mailto: wumike@umich.edu">Jiayao</a> •&nbsp;
            <a href="mailto: kcdeback@umich.edu">Keneth</a> •&nbsp;
            <a href="mailto: mingyuli@umich.edu">Mingyu</a> •&nbsp;
            <a href="mailto: nkumari@umich.edu">Neha</a> •&nbsp;
            <a href="mailto: tianchi@umich.edu">Tianchi</a> •&nbsp;
            <a href="mailto: lorenlin@umich.edu">Yipeng</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
