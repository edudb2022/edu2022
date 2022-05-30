// import Link from "next/link";
// import React from "react";
// import BaseCard, { IBaseCardProps } from "..";
// import { ID, SchoolName } from "../../../../types/state";

// export interface ISchoolCardProps extends IBaseCardProps {
//   id: ID;
//   schoolChineseName: SchoolName;
//   schoolEnglishName: SchoolName;
//   shortName: SchoolName;
//   averageSchoolScore: number;

//   //   average campus/Facility rating[Excellent/ Good/ Neutral/ Bad / Shit]
//   // average School Policy rating [Excellent/ Good/ Neutral/ Bad / Shit]
//   // average learning culture/enviroment rating[Excellent/ Good/ Neutral/ Bad / Shit]
//   // average Accomodation[Excellent/ Good/ Neutral/ Bad / Shit]
//   // avergae Cateen rating[Excellent/ Good/ Neutral/ Bad / Shit]
// }

// const TertiarySchoolCard: React.FunctionComponent<ISchoolCardProps> = ({
//   id,
//   schoolChineseName,
//   schoolEnglishName,
//   shortName,
//   averageSchoolScore,
// }) => {
//   return (
//     <Link href={`/schools/tertiary/${id}`}>
//       <a>
//         <BaseCard className="border-2 w-56 h-56 m-2">
//           <h6> {id}</h6>
//           <h6> {schoolChineseName}</h6>
//           <h6> {schoolEnglishName}</h6>
//           <h6> {shortName}</h6>
//           <h6> {averageSchoolScore}</h6>
//         </BaseCard>
//       </a>
//     </Link>
//   );
// };

// export default TertiarySchoolCard;
