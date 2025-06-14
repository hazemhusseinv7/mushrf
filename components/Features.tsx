import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = "مميزات منصة مشرف:";

const data = [
  {
    title: "إشراف ومتابعة إلكترونية",
    description:
      "تسهّل المنصة عملية التواصل بين جميع الأطراف المرتبطة بالمشروع، مما يضمن شفافية العمل وسرعة اتخاذ القرارات.",
    src: "/features/image-1.svg",
  },
  {
    title: "توثيق وتسجيل تلقائي",
    description:
      "يتم تسجيل كافة العمليات والتحديثات إلكترونيًا، مما يسهم في أرشفة البيانات وسهولة الرجوع إليها عند الحاجة.",
    src: "/features/image-2.svg",
  },
  {
    title: "إدارة مالية دقيقة",
    description:
      "تساعد المنصة في مراقبة التكاليف والمصروفات، مما يعزز الرقابة المالية ويضمن تحقيق أعلى مستويات الكفاءة.",
    src: "/features/image-3.svg",
  },
  {
    title: "تقارير لحظية",
    description:
      "توفر المنصة إمكانية استدعاء التقارير الفنية والمالية في أي وقت، مما يسهل عملية التحليل واتخاذ القرارات المناسبة.",
    src: "/features/image-4.svg",
  },
  {
    title: "تكامل بين الأطراف",
    description:
      "تربط المنصة بين الملاك والمشرفين والمقاولين، مما يضمن سير العمل بانتظام وفق الجدول الزمني المخطط له.",
    src: "/features/image-5.svg",
  },
  {
    title: "تنبيهات وإشعارات ذكية",
    description:
      "تُمكّن المستخدمين من تلقي إشعارات فورية حول تقدم المشروع أو أي تحديثات ضرورية.",
    src: "/features/image-6.svg",
  },
  {
    title: "إدارة العقود والمستندات",
    description:
      "توفر المنصة نظامًا رقميًا لحفظ العقود والمستندات، مما يضمن سهولة الوصول إليها في أي وقت.",
    src: "/features/image-7.svg",
  },
  {
    title: "طلب المواد والكميات",
    description:
      "تتيح المنصة تسجيل التوريد وضمان توفر المواد في الوقت المناسب.",
    src: "/features/image-8.svg",
  },
  {
    title: "أمان وخصوصية",
    description:
      "تعتمد المنصة على تقنيات متقدمة لحماية بيانات المستخدمين وضمان سرية المعلومات.",
    src: "/features/image-9.svg",
  },
];

const Features = () => {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));
  return (
    <section id="features" dir="ltr">
      <div className="w-full h-full py-20">
        <h2 className="max-w-7xl pl-4 mx-auto" dir="rtl">
          <TextGenerateEffect
            words={words}
            className="text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200"
          />
        </h2>
        <Carousel items={cards} />
      </div>
    </section>
  );
};

export default Features;
