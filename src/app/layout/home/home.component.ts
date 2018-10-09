import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import bar from 'britecharts/dist/umd/bar.min';
import miniTooltip from 'britecharts/dist/umd/miniTooltip.min';
import colors from 'britecharts/dist/umd/colors.min.js';
import * as d3 from 'd3';
import {DashboardApi} from '../../shared/services/HomeAPI';
import * as model from '../../shared/models/models';
import { Observable }                                        from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private homeChart: model.HomeChart;
  private error;

  constructor(private api: DashboardApi) { }

  ngOnInit() {

    this.api.getDashboardCharts()            
    .subscribe(
      home => {
          this.homeChart = home;
      },
      error => this.error = error
    );

    let tooltip = new miniTooltip();
    var barContainer = d3.select('.js-line-container');
    let barChart = new bar();
    if (barContainer.node()) {
      let containerWidth = barContainer.node() ? barContainer.node().getBoundingClientRect().width : false;
      barChart
      .width(containerWidth)
      .height(300)
      .hasPercentage(true)
      .enableLabels(true)
      .labelsNumberFormat('.0%')
      .isAnimated(true)
      .colorSchema(colors.colorSchemas.britecharts)
      .on('customMouseOver', tooltip.show)
      .on('customMouseMove', tooltip.update)
      .on('customMouseOut', tooltip.hide);

      let dataset = [
        {
            "name": "Acera",
            "value": 0.08167
        },
        {
            "name": "Bacheo",
            "value": 0.0492
        },
        {
            "name": "Limpia",
            "value": 0.02782
        },
        {
            "name": "Iluminación",
            "value": 0.04253
        },
        {
            "name": "Parques y Jardines",
            "value": 0.02702
        },
        {
            "name": "Señales",
            "value": 0.02288
        }
      ];
      barContainer.datum(dataset).call(barChart);
      tooltip.numberFormat('.2%');

      let tooltipContainer = d3.select('.bar-chart .metadata-group');
      tooltipContainer.datum([]).call(tooltip);
    }
  }

}
