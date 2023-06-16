const types = {
  war: "warning",
  cat: "caution",
  unn: "unannounced",
  ann: "annunciator"
}


export const LatitudeMemoryItems = [
  {
    memoryItem: "APU FIRE",
    procedure: [
      ["APU FIRE Button","Push"],
    ],
    itemType: types.war
  },
  {
    memoryItem: "AT (Auto Throttle) HOLD FAIL",
    procedure: [
      ["Takeoff","Abort"],
    ],
    itemType: types.war
  },
  {
    memoryItem: "ENGINE FIRE L or R Below V1",
    procedure: [
      ["Takeoff","Abort"],
    ],
    itemType: types.war
  },
  {
    memoryItem: "NO TAKEOFF CAS",
    procedure: [
      ["Takeoff","Abort"],
    ],
    itemType: types.war
  },
  {
    memoryItem: "ENGINE FAILURE (or other emergency during takeoff) Below V1",
    procedure: [
      ["Takeoff","Abort"],
    ],
    itemType: types.war
  },
  {
    memoryItem: "EBATTERY OVERTEMP L and/or R",
    procedure: [
      ["BATT Button (affected side)","OFF"],
    ],
    itemType: types.war
  },
  {
    memoryItem: "CABIN ALTITUDE",
    procedure: [
      ["Oxygen Masks","Don and 100%"],
      ["MIC SEL Buttons (Both)","MASK"],
      ["Initiate maximum rate of descent to a safe altitude",""],
    ],
    itemType: types.war
  },
  {
    memoryItem: "EMERGENCY DESCENT and EDM",
    procedure: [
      ["Oxygen Masks","Don and 100%"],
      ["MIC SEL Buttons (Both)","MASK"],
      ["Initiate maximum rate of descent to a safe altitude",""],
    ],
    itemType: types.war
  },
  {
    memoryItem: "ENGINE FIRE L or R Above V1/in-flight",
    procedure: [
      ["Autothrottle","Disengage"],
      ["Throttle","Idle"],
      ["WING XFLOW ANTI-ICE Button","XFLOW (if wing anti-ice on)"],
      ["If engine fire light is still illuminated after 15 seconds",""],
      ["ENG FIRE Button (illuminated side)","Push"],
      ["BOTTLE ARMED Button (either side)","Push"],
    ],
    itemType: types.war
  },
  {
    memoryItem: "T/R DEPLOY L or R",
    procedure: [
      ["T/R EMER STOW Button","EMER STOW"],
      ["Throttle","IDLE"],
      ["Airspeed","Decrease to 150KIAS max"],
    ],
    itemType: types.war
  },
  {
    memoryItem: "WINDSHEAR",
    procedure: [
      ["Autothrottle","Disengage"],
      ["Autopilot","Disengage"],
      ["Throttles","TO"],
      ["Pitch Attitude","Go-Around Attitude (7.5°)"],
      ["SPEEDBRAKE Handle","RET"],
    ],
    itemType: types.war
  },
  {
    memoryItem: "ENGINE FAILURE/OTHER EMER DURING TO Above V1",
    procedure: [
      ["Takeoff","Continue to a safe altitude"],
      ["WING XFLOW ANTI-ICE Button","XFLOW (if wing anti-ice on)"],
    ],
    itemType: types.war
  },
  {
    memoryItem: "ENGINE FAILURE DURING FINAL APPROACH",
    procedure: [
      ["Flap Selector","2"],
      ["Airspeed","Vapp"],
    ],
    itemType: types.war
  },
  {
    memoryItem: "DUAL ENGINE FLAMEOUT - CRUISE",
    procedure: [
      ["Crew Oxygen Masks (if required)","Don and 100%"],
    ],
    itemType: types.war
  },
  {
    memoryItem: "DUAL ENGINE FLAMEOUT - LOW ALTITUDE",
    procedure: [
      ["Fuel","Check Tanks/Quantity"],
      ["FUEL BOOST PUMP Buttons (both)","ON"],
      ["ENGINE RUN/STOP Buttons","STOP"],
    ],
    itemType: types.war
  },
  {
    memoryItem: "UNCOMMANDED ENGINE THRUST Below V1",
    procedure: [
      ["Takeoff","Abort"],
      ["ENG FIRE Button (affected side)","Push"],
    ],
    itemType: types.war
  },
  {
    memoryItem: "UNCOMMANDED ENGINE THRUST Above V1, climb, cruise or descent",
    procedure: [
      ["Climb to safe altitude",""],
    ],
    itemType: types.war
  },
  {
    memoryItem: "UNCOMMANDED ENGINE THRUST During approach",
    procedure: [
      ["TO/GA Button (either throttle)","Push"],
      ["Throttles","TO"],
      ["Airplane Pitch Attitude","7.5° Initially"],
      ["(FD go-around command), then As Required",""],
    ],
    itemType: types.war
  },
  {
    memoryItem: "UNCOMMANDED ENGINE THRUST During landing roll",
    procedure: [
      ["Directional Control","Maintain"],
      ["ENG FIRE Button (affected side)","Push"],
    ],
    itemType: types.war
  },
  {
    memoryItem: "ELECTRICAL SYSTEM SMOKE or FIRE",
    procedure: [
      ["Oxygen Masks / Goggles","Don and EMER"],
    ],
    itemType: types.war
  },
  {
    memoryItem: "ENVIRONMENTAL SYSTEM SMOKE or ODOR",
    procedure: [
      ["Oxygen Masks / Goggles","Don and EMER"],
    ],
    itemType: types.war
  },
  {
    memoryItem: "SMOKE REMOVAL",
    procedure: [
      ["Oxygen Masks / Goggles","Don and EMER"],
    ],
    itemType: types.war
  },
  {
    memoryItem: "HYDRAULIC WHEEL BRAKE FAILURE",
    procedure: [
      ["Brake Pedals","Remove Feet"],
      ["EMERGENCY BRAKE Handle","Pull and Hold until stopped"],
    ],
    itemType: types.war
  },
  {
    memoryItem: "AILERON TRIM RUNAWAY",
    procedure: [
      ["AP/TRIM/NWS DISC Button","Push and Hold"],
    ],
    itemType: types.war
  },
  {
    memoryItem: "PRIMARY PITCH TRIM RUNAWAY",
    procedure: [
      ["AP/TRIM/NWS DISC Button","Push and Hold"],
    ],
    itemType: types.war
  },
  {
    memoryItem: "RUDDER TRIM RUNAWAY",
    procedure: [
      ["AP/TRIM/NWS DISC Button","Push and Hold"],
    ],
    itemType: types.war
  },
  {
    memoryItem: "NOSEWHEEL STEERING MALFUNCTION",
    procedure: [
      ["AP/TRIM/NWS DISC Button","Push and Hold"],
    ],
    itemType: types.war
  },
  {
    memoryItem: "UNCOMMANDED ROLL",
    procedure: [
      ["AP/TRIM/NWS DISC Button","Push"],
    ],
    itemType: types.war
  },
  {
    memoryItem: "SECONDARY PITCH TRIM RUNAWAY",
    procedure: [
      ["SECONDARY TRIM Button","OFF"],
      ["",""],
    ],
    itemType: types.war
  },
  {
    memoryItem: "JAMMED PITCH OR ROLL CONTROL SYSTEM",
    procedure: [
      ["Stabilizer Trim Switch","Use for desired pitch"],
      ["Control Wheel","Relax Pressure"],
      ["PITCH/ROLL Disconnect Handle","Pull Until Latched"],
      ["Operative Control Wheel","Identify, Recover Airplane Attitude"],
    ],
    itemType: types.war
  },
  {
    memoryItem: "TOTAL LOSS OF OR UNRELIABLE AIRSPEED INDICATION",
    procedure: [
      ["Autothrottle","Disengage"],
      ["Autopilot","Disengage"],
      ["Yaw Damper","Disengage"],
      ["PITOT/STATIC ANTI-ICE Buttons","OFF, then ON"],
    ],
    itemType: types.war
  },
  {
    memoryItem: "INADVERTENT STALL",
    procedure: [
      ["AP/TRIM/NWS DISC Button","Push"],
      ["Pitch Attitude","Decrease to at least 0° to -5°"],
      ["Roll Attitude","Wings level"],
      ["Autothrottle",""],
      ["","Disengage"],
      ["Throttles","TO"],
    ],
    itemType: types.war
  }
]