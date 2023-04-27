import { useEffect } from "react";

/* 
    < menu 클릭 시 실행되는 Hook >
    동작 : useRef로 받은 
*/
export const useMenuChange = () => {
    // const menuMove = () => {
        useEffect(() => {
            document.getElementById('main')?.scrollIntoView(true);
        }, []);
    // }
    // return menuMove
};

export default useMenuChange;