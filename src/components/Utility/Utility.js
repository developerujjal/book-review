import { toast } from 'react-toastify';

const getData = () => {
    const selectIteam = localStorage.getItem('reading-books');
    if (selectIteam) {
        return JSON.parse(selectIteam);
    }

    return []
}

const saveData = (id) => {
    const datas = getData();
    const isExist = datas.find(iteam => iteam === id);
    if (!isExist) {
        datas.push(id);
        toast.success('Successfully Added');
        localStorage.setItem('reading-books', JSON.stringify(datas));
    }else{
        toast.error("Sorry, Already Added");
    }


}



export { getData, saveData }