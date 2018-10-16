    enum Motors {
        //% blockId=Motor_motor_A
        //% block="motor A"
        MotorA,
        //% blockId=Motor_motor_B
        //% block="motor B"
        MotorB,
        //% blockId=Motor_motor_AB
        //% block="motor AB"
        MotorAB
    }

    enum MotorDirection {
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

    enum Rotated {
        //% block="left"
        Left,
        //% block="right"
        Right
    }

    enum RotatedmS {
        //% block="left"
        Left,
        //% block="right"
        Right
    }

    enum Turn {
        //% block="left"
        Left,
        //% block="right"
        Right
    }

//% weight=50 color="#ff6600" weight=10 icon="\uf11e"
namespace MyRobotBit {

     /**	
     * Turns on motor, forward, reverse at the requested speed 
     *
	 * @param speed which to spin the motor, eg:50
     */
    //% blockId="MyRobotBit_motorON" block="motor %Motors | direction %MotorDirection | speed %speed"
    //% speed.min=0 speed.max=100
    export function motorOn(motorCH: Motors, dir: MotorDirection, speed: number): void {
        let motorspeed = pins.map(speed,0,100,0,1023)     
 
	if (motorCH==Motors.MotorAB && dir==MotorDirection.Forward) {
                        pins.analogWritePin(AnalogPin.P13, motorspeed)
                        pins.digitalWritePin(DigitalPin.P14, 0)
			pins.analogWritePin(AnalogPin.P15, motorspeed)
                        pins.digitalWritePin(DigitalPin.P16, 0)
	}
	else if (motorCH==Motors.MotorA && dir==MotorDirection.Forward) {
                        pins.analogWritePin(AnalogPin.P13, motorspeed)
                        pins.digitalWritePin(DigitalPin.P14, 0)
	}
	else if (motorCH==Motors.MotorB && dir==MotorDirection.Forward) {
                        pins.analogWritePin(AnalogPin.P15, motorspeed)
                        pins.digitalWritePin(DigitalPin.P16, 0)
	}
	if (motor==MotorsCH.MotorAB && dir==MotorDirection.Reverse) {
                        pins.analogWritePin(AnalogPin.P14, motorspeed)
                        pins.digitalWritePin(DigitalPin.P13, 0)
                        pins.analogWritePin(AnalogPin.P16, motorspeed)
                        pins.digitalWritePin(DigitalPin.P15, 0)
	}
	else if (motorCH==Motors.MotorA && dir==MotorDirection.Reverse) {
                        pins.analogWritePin(AnalogPin.P14, motorspeed)
                        pins.digitalWritePin(DigitalPin.P13, 0)
	}
	else if (motorCH==Motors.MotorB && dir==MotorDirection.Reverse) {
                        pins.analogWritePin(AnalogPin.P16, motorspeed)
                        pins.digitalWritePin(DigitalPin.P15, 0)
	}
    }
}
