import { useEffect, useState } from 'react';
import { getData } from '../../Utility/Utility';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell } from 'recharts';
import { useLoaderData } from 'react-router-dom';
import PropTypes from 'prop-types';


const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
};


const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};



const ReadingPage = () => {
    const [newData, setNewData] = useState([])

    const mainData = useLoaderData();

    useEffect(() => {
        const dataRecived = getData();

        const dataForChart = []
        for (let id of dataRecived) {
            const exsit = mainData.find(iteam => iteam.bookId === id);
            dataForChart.push(exsit);
        }
        setNewData(dataForChart)

    }, [mainData])


    const chartData = newData.map(book => ({
        name: book.bookName,
        page: book.totalPages,
    }));


    return (
        <div className='flex justify-center mt-8'>
            <BarChart
                width={800}
                height={400}
                data={chartData}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >

                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey='name' />
                <YAxis />
                <Tooltip />
                <Bar dataKey="page" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>

                    {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}

                </Bar>
            </BarChart>

        </div>
    );
};


TriangleBar.propTypes = {
    props: PropTypes.object,
    x: PropTypes.number, 
    y: PropTypes.number,    
    width: PropTypes.number, 
    height: PropTypes.number 
}

export default ReadingPage;