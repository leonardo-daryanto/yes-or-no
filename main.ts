enum Icons {

    //% block="yes"
    Yes,
    
    //% block="no"
    No
}
namespace icons {
    /**
     *  making a icon yes or no e.g. no/yes
     */
    //% block
    export function iconAnswer(answer: Icons): void {

        
        if (answer == 0) {
            
            basic.showIcon(IconNames.Yes)
        } else if (answer == 1) {
            
            basic.showIcon(IconNames.No)
        }
    }
}
