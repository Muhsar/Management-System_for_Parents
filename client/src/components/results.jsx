import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FirstTerm from './firstterm'
import SecondTerm from './secondterm'
import ThirdTerm from './thirdterm'
class Results extends Component {
  render() {
    return (
      <div class="main-content">
      <div class='row'>
      <div class='col-md-2'>
      <div class="nav flex-column nav-pills " id="v-pills-tab" role="tablist" aria-orientation="vertical">
											<a class="nav-link active show" id="1stterm-tab" data-toggle="pill" href="#1stterm" role="tab" aria-controls="1stterm" aria-selected="false">1st Term</a>
											<a class="nav-link" id="2ndterm-tab" data-toggle="pill" href="#2ndterm" role="tab" aria-controls="2ndterm" aria-selected="false">2nd Term</a>
											<a class="nav-link" id="3rdterm-tab" data-toggle="pill" href="#3rdterm" role="tab" aria-controls="3rdterm" aria-selected="false">3rd Term</a>
										</div>
</div>
<div class='col-md-9'>
                    <div class="tab-content pl-3 p-1" id="myTabContent">
											<div class="tab-pane fade active show" id="1stterm" role="tabpanel" aria-labelledby="1stterm-tab">
												<FirstTerm/>
											</div>
											<div class="tab-pane fade" id="2ndterm" role="tabpanel" aria-labelledby="2ndterm-tab">
												<SecondTerm/>
											</div>
											<div class="tab-pane fade" id="3rdterm" role="tabpanel" aria-labelledby="3rdterm-tab">
												<ThirdTerm/>
											</div>
										</div>
                    </div>
                    </div>
                    </div>
    );
  }
}

export default Results;
