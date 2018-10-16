/**
* Custom block for control  Motor A and Motor B 
*/
 enum Motors {
        //% block="motor A"
        MotorA,
        //% block="motor B"
        MotorB,
        //% block="motor AB"
        MotorAB
    }

enum MotorsDir {
        //% block="forward"
        Forward,
        //% block="reverse"
        Reverse
    }

enum StopMode {
        //% block="brake"
        Brake,
        //% block="coast"
        Coast
    }

//% weight=50 color=#ff6600 icon="\uf11e"
namespace MyRobotBit {

     /**	
     * Turns on motor forward reverse at the requested speed 
     * @param speed         motor speed 0-100, eg: 50
     * @param motorSelect   select motor to control
     * @param direction     motor direction
     */
    //% blockId="MyRobotBit_motorON" block="motor %Motors | direction %MotorsDir | speed %speed"
    //% speed.min=0 speed.max=100
    export function motorON(motorSelect:Motors, direction:MotorsDir, speed:number): void {
        let motorspeed = pins.map(speed,0,100,0,1023)     
 
	if (motorSelect==Motors.MotorAB && direction==MotorsDir.Forward) {
                        pins.analogWritePin(AnalogPin.P13, motorspeed)
                        pins.digitalWritePin(DigitalPin.P14, 0)
			pins.analogWritePin(AnalogPin.P15, motorspeed)
                        pins.digitalWritePin(DigitalPin.P16, 0)
	}
	else if (motorSelect==Motors.MotorA && direction==MotorsDir.Forward) {
                        pins.analogWritePin(AnalogPin.P13, motorspeed)
                        pins.digitalWritePin(DigitalPin.P14, 0)
	}
	else if (motorSelect==Motors.MotorB && direction==MotorsDir.Forward) {
                        pins.analogWritePin(AnalogPin.P15, motorspeed)
                        pins.digitalWritePin(DigitalPin.P16, 0)
	}
	else if (motor==MotorsSelect.MotorAB && direction==MotorsDir.Reverse) {
                        pins.analogWritePin(AnalogPin.P14, motorspeed)
                        pins.digitalWritePin(DigitalPin.P13, 0)
                        pins.analogWritePin(AnalogPin.P16, motorspeed)
                        pins.digitalWritePin(DigitalPin.P15, 0)
	}
	else if (motorSelect==Motors.MotorA && direction==MotorsDir.Reverse) {
                        pins.analogWritePin(AnalogPin.P14, motorspeed)
                        pins.digitalWritePin(DigitalPin.P13, 0)
	}
	else if (motorSelect==Motors.MotorB && direction==MotorsDir.Reverse) {
                        pins.analogWritePin(AnalogPin.P16, motorspeed)
                        pins.digitalWritePin(DigitalPin.P15, 0)
	}
    }
}