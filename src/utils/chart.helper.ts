import {ChartList} from '../model/analisis/chart.list';
import { ChartListExhibition } from '../model/analisis/chart.list.exibition';

export function mapApiResultToMonthChart(apiChartList:ChartList[]):ChartListExhibition[]{
    let result = [] as ChartListExhibition[];
    //let year = new Date(apiChartList[0].dateTime).getFullYear();
    //let month = new Date(apiChartList[0].dateTime).getMonth();
    for(let concreteDay = 1; concreteDay< 32;concreteDay++){
        let amoutFound = null;
        for(let apiDay = 0; apiDay< apiChartList.length;apiDay++){
            
            //console.log(new Date(apiChartList[apiDay].dateTime).getDate() + " " + apiChartList[apiDay].dateTime)
            if(concreteDay === new Date(apiChartList[apiDay].dateTime).getDate()){
                amoutFound = apiChartList[apiDay].amount;
            }
        }
        if(amoutFound){
            result.push({
                dateTime: `${concreteDay}`,
                amount: amoutFound
            });
        }else{
            result.push({
                dateTime: `${concreteDay}`,
                amount: 0
            });
        }
    }
    return result;
}
