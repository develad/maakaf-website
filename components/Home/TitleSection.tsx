import Image from 'next/image';

export default function TitleSection() {
  return (
    <div className="relative mx-auto max-w-[1600px] md:pr-24 flex justify-between pt-0 px-[40px] pb-10">
      <div className="z-0 flex flex-col items-center w-full mt-[1.2rem] md:-mt-2 lg:mt-0 md:px-10 lg:px-12 gap-8 md:w-1/2 md:items-start">
        <h1 className="w-full text-center md:text-[40px] lg:text-5xl md:text-right leading-[1.2] md:leading-normal">
          קהילת מעקף&nbsp;-
          <br />
          קוד פתוח ישראל
        </h1>
        <h4 className="w-full text-center md:text-right font-medium">
          מטרת הקהילה היא חיבור
          <br />
          בין מפתחים ישראלים המעוניינים
          <br />
          לתרום לקוד פתוח,
          <br />
          ובין ספריות קוד פתוח ישראליות.
          <br />
          <br />
          הפעילות של הקהילה מתקיימת
          <br />
          בשרת הדיסקורד שלנו.
        </h4>
        <a
          href="https://discord.com/invite/a2VyCjRk2M"
          target="_blank"
          className="flex items-center justify-center gap-2 py-2 text-xs rounded-full discord-btn px-7 dark:hover:bg-purple-200 item-hover-transition"
        >
          בואו לדיסקורד
          <Image
            src={'/images/discord.png'}
            alt="discord"
            width={20}
            height={20}
          />
        </a>
      </div>
      <div className="absolute top-0 md:top-8 left-0 lg:min-h-[800px] xl:w-[650px] w-full h-full opacity-50 md:w-1/2 md:h-full  md:opacity-100 -z-10 px-[20px] md:pl-24">
        <div
          className={
            'bg-[url("/images/skeleton_loader.png")] dark:bg-[url("/images/skeleton_loader_dark.png")] w-full h-full bg-top bg-no-repeat bg-contain md:bg-contain'
          }
        ></div>
      </div>
    </div>
  );
}
