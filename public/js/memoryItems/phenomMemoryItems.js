const types = {
  war: "warning",
  cat: "caution",
  unn: "unannounced",
  ann: "annunciator"
}


export const phenomMemoryItems = [
  {
    memoryItem: "SMOKE/FIRE/FUMES",
    procedure: [
      ["Oxygen Mask","DON, EMERGENCY"],
      ["Dilution Valve","CLOSED"],
      ["Smoke Goggles","DON"],
      ["Communication","ESTABLISH"],
      ["DUMP Button","PUSH IN"],
      ["Refer to QRH SMOKE Tab",""],
    ],
    itemType: types.war
  },
  {
    memoryItem: "SMOKE EVACUATION",
    procedure: [
      ["Oxygen Mask","DON, EMERGENCY"],
      ["Dilution Valve","CLOSED"],
      ["Smoke Goggles","DON"],
      ["Communication","ESTABLISH"],
      ["Oxygen Knob","CREW ONLY"],
      ["DUMP Button","PUSH IN"],
      ["ECS Knob","OFF VENT"],
      ["Refer to QRH SMOKE Tab",""],
    ],
    itemType: types.war
  },
  {
    memoryItem: "EMERGENCY EVACUATION",
    procedure: [
      ["Thrust Levers","IDLE"],
      ["Emergency/Parking Brake","ON"],
      ["START STOP Knobs","STOP"],
      ["SHUTOFF 1 & 2 Buttons","PUSH IN"],
      ["PRESN MODE Switch","MAN"],
      ["DUMP Button","PUSH IN"],
      ["ATC","NOTIFY"],
      ["EVACUATION","PERFORM"],
      ["BATT 1 & 2 Switches","OFF"],
      ["Refer to QRH BACK PAGE",""],
    ],
    itemType: types.war
  },
  {
    memoryItem: "ENGINE ABNORMAL START",
    procedure: [
      ["START/STOP Knob","STOP"],
      ["Refer to QRH NON-ANNUNCIATED Tab",""],
    ],
    itemType: types.war
  },
  {
    memoryItem: "ENGINE FIRE, SEVERE DAMAGE OR SEPARATION",
    procedure: [
      ["Thrust Lever","IDLE"],
      ["START/STOP Knob","STOP"],
      ["SHUTOFF Button","PUSH IN"],
      ["Wait 30 seconds and if fire persists:",""],
      ["BOTTLE Switch","DISCH"],
      ["Refer to QRH NON-ANNUNCIATED Tab",""],
    ],
    itemType: types.war
  },
  {
    memoryItem: "DUAL ENGINE FAILURE",
    procedure: [
      ["Thrust Lever","IDLE"],
      ["Oxygen Mask","DON, 100%"],
      ["Communication","ESTABLISH"],
      ["Refer to QRH NON-ANNUNCIATED Tab",""],
    ],
    itemType: types.war
  },
  {
    memoryItem: "ELEC EMERGENCY",
    procedure: [
      ["PRESN MODE Switch","MAN"],
      ["CABIN ALT Switch.","HOLD DOWN 10s"],
      ["If at or above 25000 ft:",""],
      ["Rudder Pedals","FIXED"],
      ["If above 10000 ft:",""],
      ["CAB ALTITUDE HI Procedure",""],
      ["(EAP2-3)","ACCOMPLISH"],
      ["Refer to QRH Tab 4",""],
    ],
    itemType: types.war
  },
  {
    memoryItem: "ELEC XER FAIL",
    procedure: [
      ["ELEC EMER Button","PUSH IN"],
      ["Refer to ORH Tab 4",""],
    ],
    itemType: types.war
  },
  {
    memoryItem: "E1 (2) FIRE",
    procedure: [
      ["Affected Engine:",""],
      ["Thrust Lever","IDLE"],
      ["START/STOP Knob","STOP"],
      ["SHUTOFF Button","PUSH IN"],
      ["On ground or if fire persists after 30 seconds in flight:",""],
      ["BOTTLE Switch","Disch"],
      ["Refer to QRH Tab 6",""],
    ],
    itemType: types.war
  },
  {
    memoryItem: "CABIN ALTITUDE HI",
    procedure: [
      ["Oxygen Mask","DON, 100%"],
      ["Communication","ESTABLISH"],
      ["Fasten Seat Belts Signs","ON"],
      ["Altitude","MAX 10000 FT OR MEA, WHICEVER IS HIGHER"],
      ["Thrust Lever","IDLE"],
      ["SPEED BRAKE Switch","OPEN"],
      ["Airspeed","MAX 250 KIAS/MMO"],
      ["LDG GEAR Lever","DN"],
      ["TRANSPONDER","7700"],
      ["ATC","NOTIFY"],
      ["Refer to QRH Tab 2",""],
    ],
    itemType: types.war
  },
  {
    memoryItem: "EMERGENCY DESCENT",
    procedure: [
      ["Fasten Seat Belts Signs","ON"],
      ["Altitude","MAX 10000 FT OR MEA"],
      ["Thrust Levers","IDLE"],
      ["SPEED BRAKE Switch","OPEN"],
      ["Airspeed","MAX 250 KIAS/MMO"],
      ["DG GEAR Lever","DN"],
      ["Transponder","7700"],
      ["ATC","NOTIFY"],
      ["Refer to QRH NON-ANNUNCIATED Tab",""],
    ],
    itemType: types.war
  },
  {
    memoryItem: "GEAR LEVER CANNOT BE MOVED UP",
    procedure: [
      ["If associated with engine failure and obstacle clearance, simultaneously proceed:",""],
      ["DN LCK REL Button","PRESS"],
      ["LDG GEAR Lever","UP"],
      ["Refer to QRH NON-ANNUNCIATED Tab",""],
    ],
    itemType: types.unn
  },
  {
    memoryItem: "INADVERTENT PUSHER ACTUATION",
    procedure: [
      ["PUSHER CUTOUT Button","PUSH IN"],
      ["Refer to QRH NON-ANNUNCIATED Tab",""],
    ],
    itemType: types.unn
  },
  {
    memoryItem: "LG WOW SYS FAIL",
    procedure: [
      ["If associated with engine failure and obstacle clearance, simultaneously proceed:",""],
      ["DN LCK REL Button","PRESS"],
      ["LDG GEAR Lever","UP"],
      ["Refer to QRH Tab 12",""],
    ],
    itemType: types.cat
  },
  {
    memoryItem: "TAKEOFF WITH ENGINE FAILURE AT OR ABOVE V1",
    procedure: [
      ["At VR rotate the airplane according to the following table:",""],
      ["FLAP POSITION","1 || 2"],
      ["PITCH ANGLE","10.5° || 8°"],
      ["With positive rate of climb:",""],
      ["LDG GEAR Lever","UP"],
      ["Airspeed","V2"],
      ["Refer to AFM Emergency and Abnormal Procedures",""],
    ],
    itemType: types.war
  },
  {
    memoryItem: "REJECTED TAKEOFF (AT OR BELOW V1)",
    procedure: [
      ["Thrust levers","IDLE"],
      ["Brakes","APPLY MAXIMUM"],
      ["Directional Control","MAINTAIN"],
      ["Refer to AFM Emergency and Abnormal Procedures",""],
    ],
    itemType: types.unn
  },
  {
    memoryItem: "WINDSHEAR",
    procedure: [
      ["Thrust levers","MAX"],
      ["Autopilot","DISENGAGE"],
      ["Pitch Angle (nose up)","15°"],
    ],
    itemType: types.war
  },

]