import { useState } from "react"

const useLocalState = (defaultValue = []) => {
    const [value, setValue] = useState(defaultValue)

    const getData = () => {
        const selectIteam = localStorage.getItem('reading-books');
        if (selectIteam) {
            return JSON.parse(selectIteam);
        }

        return []
    }

    const handleData = (id) => {

        const datas = getData();
        const isExist = datas.find(iteam => iteam === id);
        if (!isExist) {
            datas.push(id);
            localStorage.setItem('reading-books', JSON.stringify(datas));
        }

        setValue(datas)

    }

    return [value, handleData]
}

export default useLocalState;