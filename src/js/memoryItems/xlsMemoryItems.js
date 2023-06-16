const types = {
  war: "warning",
  cat: "caution",
  unn: "unannounced",
  ann: "annunciator"
}



export const xlsMemoryItems = [
  {
    memoryItem: "APU FIRE",
    procedure: [
      ["API FIRE Button","Lift Cover and Push"],
    ],
    itemType: types.war
  },
  {
    memoryItem: "BATT O'TEMP",
    procedure: [
      ["BATT DC AMPS","Note"],
      ["BATT Switch","EMER"],
      ["BATT DC AMPS","Note Decrease"],
    ],
    itemType: types.ann
  },
  {
    memoryItem: "CAB ALT",
    procedure: [
      ["Oxygen Masks","DON and 100% Oxygen"],
      ["Microphone Switches","MIX OXY MASK"],
      ["Emergency Descent","As required (EMER DESCENT)"],
    ],
    itemType: types.ann
  },
  {
    memoryItem: "EMER DESCENT",
    procedure: [
      ["Initiate maximum rate of descent to a safe altitude",""],
    ],
    itemType: types.war
  },
  {
    memoryItem: "LH/RH ENGINE FIRE",
    procedure: [
      ["Throttle (affected side)","IDLE"],
      ["If annunciator Remains Displayed",""],
      ["ENGINE FIRE Button (affected side)","LIFT COVER and PUSH"],
      ["Either Displayed BOTTNE ARMED Annunciator","PUSH"],
    ],
    itemType: types.war
  },
  {
    memoryItem: "PULL UP",
    procedure: [
      ["Immediately execute a vertical escape maneuver",""],
    ],
    itemType: types.war
  },
  {
    memoryItem: "WIND SHEAR",
    procedure: [
      ["Immediately execute a vertical escape maneuver",""],
    ],
    itemType: types.war
  },
  {
    memoryItem: "UNLOCK",
    procedure: [
      ["THRUST REVERSE STOW SWITCH","EMER"],
      ["Thurst Reverse Levers","Check T/R Levers stowed"],
    ],
    itemType: types.cat
  },
  {
    memoryItem: "ENGINE FAILURE OR OTHER EMER DURING TAKEOFF BELOW V1",
    procedure: [
      ["Takeoff","Abort"],
    ],
    itemType: types.unn
  },
  {
    memoryItem: "ENGINE FAILURE OR OTHER EMER DURING TAKEOFF ABOVE V1",
    procedure: [
      ["Takeoff","Continue to a Safe Altitude"],
      ["WING XFLOW Switch (if wing anti-ice is ON)","ON"],
    ],
    itemType: types.unn
  },
  {
    memoryItem: "DUAL ENGINE FAILURE (BELOW FL300)",
    procedure: [
      ["IGNITION Switches","ON"],
      ["FUEL BOOST Switches (both)","ON"],
      ["Throttles (both)","IDLE"],
    ],
    itemType: types.unn
  },
  {
    memoryItem: "ENVIRONMENTAL SYSTEM SMOKE OR ODOR",
    procedure: [
      ["Oxygen Masks/Goggles","DON and EMER"],
      ["Microphone Switch","MIX OXY MASK"],
    ],
    itemType: types.unn
  },
  {
    memoryItem: "ELECTRICAL FIRE OR SMOKE",
    procedure: [
      ["Oxygen Masks/Goggles","DON and EMER"],
      ["Microphone Switch","MIX OXY MASK"],
    ],
    itemType: types.unn
  },
  {
    memoryItem: "SMOKE REMOVAL",
    procedure: [
      ["Oxygen Masks/Goggles","DON and EMER"],
      ["Microphone Switch","MIX OXY MASK"],
    ],
    itemType: types.unn
  },
  {
    memoryItem: "THRUST REVERSER IN-FLIGHT DEPLOYMENT",
    procedure: [
      ["Control Wheel","GRIP"],
      ["AP TRIM DISC Button","Push"],
      ["THRUST REVERSE STOW Switch","EMER"],
      ["Throttle","Check IDLE"],
      ["Airspeed","140 KIAS Maximum"],
    ],
    itemType: types.unn
  },
  {
    memoryItem: "WHEEL BRAKE FAILURE",
    procedure: [
      ["Brake Pedals","Remove Feet"],
      ["EMER BRAKE Handle","Pull"],
    ],
    itemType: types.unn
  },
  {
    memoryItem: "AUTOPILOT MALFUNCTION",
    procedure: [
      ["AP TRIM DISC Button","Push"],
    ],
    itemType: types.unn
  },
  {
    memoryItem: "ELECTRIC ELEVATOR RUNAWAY TRIM",
    procedure: [
      ["AP TRIM DISC Button","Push"],
    ],
    itemType: types.unn
  },
  {
    memoryItem: "INADVERTENT STALL",
    procedure: [
      ["AP TRIM DISC Button","Push"],
      ["Pitch Attitude","Reduce"],
      ["Roll Attitude","Level"],
      ["Throttles","Maximum Thrust"],
    ],
    itemType: types.unn
  },
  {
    memoryItem: "EMERGENCY EVACUATION",
    procedure: [
      ["PARKING BRAKE", "SET"],
      ["Throttles (Both)", "CUT OFF"],
      ["LH ENGINE FIRE Button", "Push"],
      ["BOTTLE 1 ARMED Button (if fire)", "Push"],
      ["RH ENGINE FIRE Button", "Push"],
      ["BOTTLE 2 ARMED Button (if fire)", "Push"],
      ["APU MASTER Switch", "OFF"],
      ["BATT Switch", "OFF"],
    ],
    itemType: types.unn
  },
  
]