import { toast } from 'react-toastify';

const getAllDatas = () => {
    const iteam = localStorage.getItem('wish-list-books');
    if (iteam) {
        return JSON.parse(iteam);
    }

    return []
}

const saveDatasInLocal = (id) => {
    const datas = getAllDatas();
    const isExist = datas.find(eleentIteam => eleentIteam === id);
    if (!isExist) {
        datas.push(id);
        toast.success('Book Added to Wish List');
        localStorage.setItem('wish-list-books', JSON.stringify(datas));
    } else{
        toast.error('Already added to Wishlist')
    }


}


export { getAllDatas, saveDatasInLocal }