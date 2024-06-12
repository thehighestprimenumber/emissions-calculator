import {ResponsiveLine} from "@nivo/line";

interface YearlyEmission {
    year: number;
    emissions: number;
}

export function EmissionsGraph({dataByYear}: { dataByYear: YearlyEmission[] }) {
    const data = [{
        id: 'emissions',
        data: dataByYear.map(({year, emissions}) => ({x: year, y: emissions}))
    }]

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    return <ResponsiveLine
        data={data}
        margin={{top: 50, right: 110, bottom: 50, left: 60}}
        xScale={{type: 'point'}}
        // gridYValues={dataByYear.map(({emissions}) => (emissions))}
        yScale={{
            type: 'linear',
            min: -200,
            max: 'auto',
            stacked: false,
            reverse: false,
        }}
        axisBottom={{
            orient: 'bottom',
            legend: 'Year',
            legendOffset: 36,
            legendPosition: 'middle',
        }}
        axisLeft={{
            orient: 'left',
            legend: 'Emissions (tons)',
            legendOffset: -40,
            legendPosition: 'middle',
            tickSize: 0
        }}
        lineWidth={3}
        pointSize={5}
        pointColor={{theme: 'background'}}
        pointBorderWidth={2}
        pointBorderColor={{from: 'serieColor'}}
        pointLabelYOffset={-12}
        useMesh={true}
        yFormat=" >-,.0d"
        enableArea={true}

    />
}