export const numberSeparator = (num: number) => Math.floor(num).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

export function getDate(date: string) {
   const year = date.split("-", 7)[0];
   const month = date.split("-", 7)[1];
   const day = date.split("-", 7)[2];

   if (month === "01") {
     return `${day} января ${year}`;
   } else if (month === "02") {
     return `${day} февраля ${year}`;
   } else if (month === "03") {
     return `${day} марта ${year}`;
   } else if (month === "04") {
     return `${day} апреля ${year}`;
   } else if (month === "05") {
     return `${day} мая ${year}`;
   } else if (month === "06") {
     return `${day} июня ${year}`;
   } else if (month === "07") {
     return `${day} июля ${year}`;
   } else if (month === "08") {
     return `${day} августа ${year}`;
   } else if (month === "09") {
     return `${day} сентября ${year}`;
   } else if (month === "10") {
     return `${day} октября ${year}`;
   } else if (month === "11") {
     return `${day} ноября ${year}`;
   } else if (month === "12") {
     return `${day} декабря ${year}`;
   }
 }

 