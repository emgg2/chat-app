
import { animateScroll } from "react-scroll/modules";

export const scrollToBottom = ( id ) => {
    animateScroll.scrollToBottom ({
        conatinerId: id, 
        duration: 0
    })

}

export const scrollToBottomAnimated = ( id ) => {
    animateScroll.scrollToBottom ({
        conatinerId: id, 
        duration: 250
    })

}