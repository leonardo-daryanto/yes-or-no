enum icons {

    //% block="yes"
    Yes,
    
    //% block="no"
    No
}
//% weight=100 color=#17A589 icon=IC
namespace icons {
    /**
     *  making a icon yes or no e.g. no/yes
     */
    //% block
    export function iconAnswer(answer: icons): void {

        
        if (answer == 0) {
            
            basic.showIcon(IconNames.Yes)
        } else if (answer == 1) {
            
            basic.showIcon(IconNames.No)
        }
    }
}
