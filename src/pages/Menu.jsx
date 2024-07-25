import MenuAppLayout from "../features/menu/Menu";
import { IconAi, IconAppleLogo, IconCard, IconCheckList, IconClub, IconConfirmSecurity, IconCustomization, IconDiscountedCode, IconFilter, IconMessage, IconNormalTransport, IconReports, IconSettings, IconUserAccount, IconUsers, IconVariants } from "../styles/Icons";

const menus = {
   "مدیریت کاربران": [
      {
         title: "پیام ها",
         icon: <IconMessage/>,
         link: "messages"
      },
      {
         title: "کاربران",
         icon: <IconUsers/>,
         link: "users"
      },
      {
         title: "آمار و گزارشات",
         icon: <IconReports/>,
         link: "reports"
      },
   ],
   "فروش و پرداخت": [
      {
         title: "روش های پرداخت",
         icon: <IconCard/>,
         link: "payment-ways",
      },
      {
         title: "روش های ارسال",
         icon: <IconNormalTransport/>,
         link: "transports",
      },
      {
         title: "کد تخفیف",
         icon: <IconDiscountedCode/>,
         link: "discountedCode"
      },
   ],
   "محصولات و خدمات": [
      {
         title: "گارانتی ها",
         icon: <IconConfirmSecurity/>,
         link: "warranty",
      },
      {
         title: "برند ها",
         icon: <IconAppleLogo/>,
         link: "brands",
      },
      {
         title: "دسته بندی ها",
         icon: <IconFilter/>,
         link: "categories",
      },
      {
         title: "صفت ها",
         icon: <IconVariants/>,
         link: "variants",
      },
   ],
   "تنظیمات و شخصی‌سازی": [
      {
         title: "شخصی سازی سایت",
         icon: <IconCustomization/>,
         link: "websiteCustomization",
      },
      {
         title: "تنظیمات",
         icon: <IconSettings/>,
         link: "settings"
      },
      {
         title: "اکانت",
         icon: <IconUserAccount/>,
         link: "account",
      },
   ],
   "ابزارها و گزارشات": [
      {
         title: "لیست کار ها",
         icon: <IconCheckList/>,
         link: "todoList"
      },
      {
         title: "Ai لورا",
         icon: <IconAi/>,
         link: "messages/chat-with-ai",
      },
      {
         title: "لورا کلاب",
         icon: <IconClub/>,
         link: "club"
      },
   ],
};

function Menu() {
   return (
      <MenuAppLayout menus={menus}>
            <MenuAppLayout.Categories>
               <MenuAppLayout.TitleSection />
               <MenuAppLayout.Container />
            </MenuAppLayout.Categories>
      </MenuAppLayout>
   );
}

export default Menu;
