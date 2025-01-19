import { Activity, Box, House, PanelsTopLeft } from "lucide-react"

import { ScrollArea, ScrollBar } from "~/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs"
import { ImageGallery } from "~/components/image-gallery"
import { TourInfo } from "~/components/tour-info"

const tourData = {
  id: "1",
  title: "โครงการเรียนจีนระยะสั้น 1 เดือน",
  description:
    "โครงการเรียนต่อภาษาจีนกับมหาวิทยาลัยเทคโนโลยีฮาร์บิน หนึ่งในมหาวิทยาลัยชั้นนําของประเทศจีน มีชื่อเสียงในด้านการวิจัยและการศึกษาในสาขาวิทยาศาสตร์และเทคโนโลยี ก่อตั้งขึ้นในปี 1920 และเป็นหนึ่งในมหาวิทยาลัยกลุ่ม C9 League ด้วยการเรียนการสอนเป็นแบบการพูด ฟัง อ่าน และการเขียน พร้อมเปิดประสบการณ์เรียนมหาวิทยาลัยดัง Top 10 ของประเทศจีน Harbin Institute of Technology มหาวิทยาลัยชื่อดังของจีน",
  price: 2499,
  location: "Harbin, China",
  images: [
    "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
    "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b",
    "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1",
    "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8",
  ],
  highlights: [
    "ค่าตั๋วเครื่องบิน ไป - กลับ",
    "ค่าลงทะเบียนเรียน",
    "ค่ารถรับส่งสนามบิน",
    "ค่าประกันอุบัติเหตุ",
    "ค่าซิมเครือข่ายในประเทศจีน",
    "ค่าหอพัก",
    "วีซ่านักเรียน",
  ],
  about: [
    {
      title: "ข้อมูลเกี่ยวกับ HIT",
      items: [
        "HIT ก่อตั้งขึ้นในปี 1920 โดยเริ่มต้นเป็นสภาบันการศึกษาด้านวิศวกรรมและพัฒนามาเป็นมหาวิทยาลัยที่มีชื่อเสียงระดับโลก",
      ],
    },
    {
      title: "จุดเด่นทางวิชาการ",
      items: [
        "HIT ได้รับการจัดอันดับในกลุ่มมหาวิทยาลัยที่มีชื่อเสียงด้านการวิจัยในจีน และเป็นหนึ่งในสมาชิกของโครงการ C9 League ซึ่งเปรียบเสมือนกลุ่ม Ivy League ของจีน",
        "มีความโดดเด่นในด้านวิศวกรรมอวกาศ วิทยาการคอมพิวเตอร์ หุ่นยนต์ วัสดุศาสตร์ และพลังงาน",
      ],
    },
    {
      title: "วิทยาเขต",
      items: [
        "HIT มีวิทยาเขต 3 แห่ง: ในฮาร์บิน (หลัก), เวยไห่ และเซินเจิ้น ซึ่งแต่ละแห่งมีจุดเด่นเฉพาะตัวในการสนับสนุนการเรียนการสอนและการวิจัย",
      ],
    },
    {
      title: "ความร่วมมือระหว่างประเทศ",
      items: [
        "HIT มีความร่วมมือกับมหาวิทยาลัยและสถาบันวิจัยระดับโลก และยังเปิดโอกาสให้มีการแลกเปลี่ยนนักศึกษาและนักวิจัยจากทั่วโลก",
      ],
    },
    {
      title: "สิ่งแวดล้อมการเรียน",
      items: [
        "วิทยาเขตในฮาร์บินมีสถาปัตยกรรมที่ผสมผสานสไตล์รัสเซียและจีน พร้อมสิ่งอํานวยความสะดวกที่ทันสมัยสําหรับการศึกษาและวิจัย",
      ],
    },
  ],
  itinerary: [
    {
      week: "Week 1",
      title: "Welcome to Harbin & Orientation",
      description: "เริ่มต้นการเดินทางสู่เมืองฮาร์บิน พร้อมทำความรู้จักกับมหาวิทยาลัยและเริ่มต้นการเรียนรู้ภาษาจีน",
      activities: [
        "เดินทางถึงเมืองฮาร์บิน และเช็คอินที่พัก",
        "ปฐมนิเทศและแนะนำการใช้ชีวิตในมหาวิทยาลัย",
        "เริ่มเรียนภาษาจีนในช่วงเช้า (8:00-12:00)",
        "กิจกรรมแลกเปลี่ยนวัฒนธรรมในช่วงบ่าย",
        "เยี่ยมชมสถาบันเทคโนโลยีฮาร์บิน (HIT)",
        "ทำความรู้จักกับเพื่อนร่วมโครงการและอาจารย์",
      ],
    },
    {
      week: "Week 2",
      title: "City Exploration & Cultural Experience",
      description: "สัปดาห์แห่งการสำรวจเมืองฮาร์บินและสัมผัสประสบการณ์ทางวัฒนธรรม พร้อมเฉลิมฉลองเทศกาลปีใหม่",
      activities: [
        "เรียนภาษาจีนต่อเนื่องในช่วงเช้า",
        "เที่ยวชมถนนจงหยาง (中央大街) ถนนคนเดินที่มีชื่อเสียง",
        "เยี่ยมชมร้านชาดั้งเดิมและเรียนรู้วัฒนธรรมการชงชา",
        "ชมความอลังการของ Harbin Ice Snow World",
        "ฟังการแสดงดนตรีที่ Music Concert Hall (音乐长廊)",
        "ร่วมเฉลิมฉลองเทศกาลปีใหม่ในบรรยากาศแบบจีน",
      ],
    },
    {
      week: "Week 3",
      title: "Intensive Learning & Cultural Integration",
      description: "เข้าสู่ช่วงการเรียนรู้เข้มข้น เน้นการฝึกใช้ภาษาจีนในชีวิตประจำวันและการแลกเปลี่ยนวัฒนธรรม",
      activities: [
        "เรียนภาษาจีนเข้มข้น เน้นการสื่อสารในชีวิตประจำวัน",
        "กิจกรรมแลกเปลี่ยนวัฒนธรรมกับนักศึกษาจีน",
        "เยี่ยมชมพิพิธภัณฑ์และสถานที่สำคัญทางประวัติศาสตร์",
        "ฝึกใช้ภาษาจีนในสถานการณ์จริง",
        "ทัศนศึกษานอกสถานที่",
        "กิจกรรมกลุ่มสัมพันธ์และแลกเปลี่ยนประสบการณ์",
      ],
    },
    {
      week: "Week 4",
      title: "Program Wrap-up & Evaluation",
      description: "สัปดาห์สุดท้ายของโครงการ เน้นการประเมินผลการเรียนรู้และเตรียมตัวเดินทางกลับ",
      activities: [
        "สรุปบทเรียนภาษาจีน",
        "เยี่ยมชมมหาวิทยาลัยวิศวกรรมฮาร์บิน",
        "สอบวัดระดับความรู้ภาษาจีน (Post-Test)",
        "กิจกรรมอำลาและแลกเปลี่ยนของที่ระลึก",
        "เตรียมเอกสารและสัมภาระสำหรับการเดินทางกลับ",
        "พิธีมอบประกาศนียบัตร",
      ],
    },
    {
      week: "Final Day",
      title: "Departure Day",
      description: "เดินทางกลับประเทศไทยโดยสวัสดิภาพ พร้อมความทรงจำและประสบการณ์ที่ดี",
      activities: [
        "เช็คเอาท์จากที่พัก",
        "เตรียมเอกสารการเดินทาง",
        "เดินทางไปสนามบิน",
        "เดินทางกลับประเทศไทยโดยสวัสดิภาพ",
      ],
    },
  ],
}

export default function TourSlugPage() {
  return (
    <div className="border-grid border-b">
      <div className="container-wrapper">
        <div className="container py-8">
          <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <ImageGallery tourData={tourData} />
            <TourInfo tourData={tourData} />
          </div>

          <Tabs defaultValue="itinerary" className="mt-12">
            <ScrollArea>
              <TabsList className="relative mb-3 h-auto w-full gap-0.5 bg-transparent p-0 before:absolute before:inset-x-0 before:bottom-0 before:h-px before:bg-border">
                <TabsTrigger
                  value="included"
                  className="overflow-hidden rounded-b-none border-x border-t border-border bg-muted py-2 data-[state=active]:z-10 data-[state=active]:shadow-none"
                >
                  <House className="-ms-0.5 me-1.5 opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
                  ภาพรวม
                </TabsTrigger>
                <TabsTrigger
                  value="itinerary"
                  className="overflow-hidden rounded-b-none border-x border-t border-border bg-muted py-2 data-[state=active]:z-10 data-[state=active]:shadow-none"
                >
                  <PanelsTopLeft className="-ms-0.5 me-1.5 opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
                  แผนการเรียน
                </TabsTrigger>
                <TabsTrigger
                  value="reviews"
                  className="overflow-hidden rounded-b-none border-x border-t border-border bg-muted py-2 data-[state=active]:z-10 data-[state=active]:shadow-none"
                >
                  <Box className="-ms-0.5 me-1.5 opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
                  รีวิว
                </TabsTrigger>
              </TabsList>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>

            <TabsContent value="included">
              <div className="space-y-6">
                <h2 className="text-3xl font-semibold tracking-tight">เกี่ยวกับมหาวิทยาลัย</h2>

                <div className="space-y-4">
                  {tourData.about.map((section, index) => (
                    <div key={index} className="space-y-2">
                      <h3 className="font-medium">{section.title}:</h3>
                      <ul className="space-y-2">
                        {section.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="pl-4">
                            - {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="itinerary">
              <div className="space-y-8">
                {tourData.itinerary.map((week) => (
                  <div key={week.week} className="relative border-l-2 border-gray-200 pb-8 pl-8 last:pb-0">
                    <div className="absolute left-[-9px] top-0 size-4 rounded-full bg-primary" />
                    <div className="flex flex-col gap-4">
                      <div>
                        <h3 className="font-semibold">
                          {week.week}: {week.title}
                        </h3>
                        <p className="text-muted-foreground">{week.description}</p>
                      </div>
                      <ul className="space-y-2">
                        {week.activities.map((activity, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <Activity className="size-4 text-primary" />
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="reviews">
              <div className="py-12 text-center">
                <p className="text-muted-foreground">Reviews coming soon...</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
