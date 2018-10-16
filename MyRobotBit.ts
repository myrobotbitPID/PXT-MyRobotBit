/**
* Custom block for control  Motor A and Motor B 
*/
enum Motors {
        //% block="A"
        MotorA,
        //% block="B"
        MotorB,
        //% block="AB"
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

    /**MotorON Select Motor and Direction.   
      * @param Speed percent of maximum Speed, eg: 50
      */
    //% blockId="My_MotorON" block="motor %Motors | direction %MotorsDir | speed %Speed"
    //% Speed.min=0 Speed.max=100
    //% weight=100
    export function MotorON(Channel:Motors, Direction:MortorsDir, Speed:number): void {
        let motorspeed = pins.map(Speed, 0, 100, 0, 1023)  
        
        if (Channel == Motors.MotorAB && Direction == MortorsDir.Forward) {
             pins.analogWritePin(AnalogPin.P13, motorspeed)
             pins.digitalWritePin(DigitalPin.P14, 0)
	     pins.analogWritePin(AnalogPin.P15, motorspeed)
             pins.digitalWritePin(DigitalPin.P16, 0)
        }
        else if (Channel == Motors.MotorAB && Direction == MortorsDir.Reverse) {
             pins.analogWritePin(AnalogPin.P14, motorspeed)
             pins.digitalWritePin(DigitalPin.P13, 0)
             pins.analogWritePin(AnalogPin.P16, motorspeed)
             pins.digitalWritePin(DigitalPin.P15, 0)
        }
        else if (Channel == Motors.MotorA && Direction == MortorsDir.Forward) {
             pins.analogWritePin(AnalogPin.P13, motorspeed)
             pins.digitalWritePin(DigitalPin.P14, 0)
        }
        else if (Channel == Motors.MotorB && Direction == MortorsDir.Forward) {
             pins.analogWritePin(AnalogPin.P15, motorspeed)
             pins.digitalWritePin(DigitalPin.P16, 0)
        }
        else if (Channel == Motors.MotorA && Direction == MortorsDir.Reverse) {
             pins.analogWritePin(AnalogPin.P14, motorspeed)
             pins.digitalWritePin(DigitalPin.P13, 0)
        }
        else if (Channel == Motors.MotorB && Direction == MortorsDir.Reverse) {
             pins.analogWritePin(AnalogPin.P16, motorspeed)
             pins.digitalWritePin(DigitalPin.P15, 0)
        }
    }
}