function scaleBand() {
  this._axisBottomScale = d3.scaleBand();

  const {
    axisBottom: {
      key,
      scale: {
        reverse = false,
        paddingInner = 0.5,
        paddingOuter = 0.5,
      }
    }
  } = this._option;

  this._axisBottomScale
    .domain(this._data.map(d => d[key]))
    .range(reverse ? [this._innerWidth, 0] : [0, this._innerWidth])
    .paddingInner(paddingInner)
    .paddingOuter(paddingOuter)

  /**
   * the interface for _axisBottomScale
   * @param {string || number} d 
   */
  this._bottomScale = (d) => +this._axisBottomScale(d);

  /**
   * the bandwith for category value
   */
  this._bandwidth = () => this._axisBottomScale.bandwidth();
}

export { scaleBand }