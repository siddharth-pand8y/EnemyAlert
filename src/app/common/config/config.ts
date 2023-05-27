import { Country } from '../enum';
import { IShipDetail } from '../interface/ship.interface';

export const SHIPS: IShipDetail[] = [
  {
    shipId: 1,
    shipName: 'Zulfikar',
    countryId: Country.Pakistan,
    description:
      "PNS Zulfiquar (FFG-251) is the lead ship of the F-22P Zulfiquar-class guided missile frigates since 2009. She was designed and constructed by Chinese firm, Hudong-Zhonghua Shipbuilding in Shanghai, for the Pakistan Navy. The vessel's design is primarily influenced from the Type 053H3 frigate.",

    imageUrl: '/assets/images/pakistan/ships/pns_zulfiquar.jpg',
    attachments: [
      {
        attachmentName: 'Harbin Z-9',
        attachmentId: 1,
        attachmentDescription:
          'The Harbin Z-9 (NATO reporting name "Haitun", Chinese: 海豚 for Dolphin) is a Chinese military utility helicopter with civilian variants. It is a licensed variant of the French Eurocopter AS365 Dauphin, and is manufactured by Harbin Aircraft Manufacturing Corporation. In 2006, the Navy established the 222 ASW squadron with the introduction of the Harbin Z-9 which is equipped with sensors and radars to support its ESM The Z-9B features an 11-blade Fenestron faired-in tail rotor with wider-chord, all-composite blades replacing the 13-blade used in the original AS365N. As a light tactical troop transport, the Z-9 has the capacity to transport 10 fully armed soldiers. Generally the Z-9 is identical to the AS365N Dauphin, though later variants of the Z-9 incorporate more composite materials to increase structural strength and lower radar signature. The helicopter has a four-blade main rotor, with two turboshaft engines mounted side by side on top of the cabin with engine layout identical to the AS365N. The Z-9 teardrop-shaped body features a tapered boom to the tail fin, with rounded nose and stepped-up cockpit, retractable gear, and all flat bottom.',
        attachmentImageUrl:
          '/assets/images/pakistan/ships/attachments/harbin_haitun.jpg',
        coords: '',
      },
      {
        attachmentName: 'Plessey Radar',
        attachmentId: 2,
        attachmentDescription:
          "The AR-3D was a military air traffic control and early warning radar developed by Plessey and first produced in 1975. It used a pencil beam and simple frequency scanning system known as squint scan to produce a low-cost 3D radar system that was also relatively mobile. About 23 were produced in total and found sales around the world into the early 1980s. The frequency scanning system had the disadvantage that a target aircraft would always be painted by the same frequency signal, which made the task of jamming the radar simpler. This limited its sales prospects to military users, and shortly after delivering the AR-3D the company began negotiations with the US company ITT-Gillifan to incorporate their multi-frequency scanning with the AR-3D's receivers and display systems to produce the Plessey AR-320.",
        attachmentImageUrl:
          '/assets/images/pakistan/ships/attachments/plessey_radar_994.jpg',
        coords: '',
      },
      {
        attachmentName: 'Type 730',
        attachmentId: 3,
        attachmentDescription:
          'The Type 730 is a Chinese seven-barrelled 30 mm Gatling gun/Rotary cannon CIWS. It has a PLA Navy designation H/PJ12. It is mounted in an enclosed automatic turret and directed by radar, and electro-optical tracking systems. The maximum rate of fire is 5800 rd/m, and the effective range is up to 3 km. The system has been fitted on board the Type 052 (after 2011 refit), Type 052B, Type 052C, Type 052D, Type 051C destroyers, F-22P and Type 054A frigates so far, and may replace some Type 76 mounts on older combatants. Type 1130 has been deployed on Chinese aircraft carrier Liaoning, Chinese aircraft carrier Shandong, Type 055 destroyer, Type 075 landing helicopter dock, later variants of Type 052D destroyers and Type 054A frigates, and Type 051B destroyer (after 2011 refit).',
        attachmentImageUrl:
          '/assets/images/pakistan/ships/attachments/srgm_type730b_main.jpg',
        coords: '',
      },
    ],
  },
];
