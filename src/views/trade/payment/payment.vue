<template>
  <template v-if="getShow">
    <div class="payment-method">
      <h2>Choose your payment method</h2>
      <div class="pm-item">
        <input id="mpp" type="radio" name="payment-method"/>
        <label class="pm-label" for="mpp">
          <div class="pm-text">
            <h5>Paypal</h5>
            <p>Safe payment online. Credit card needed. Paypal account is not necessary.</p>
          </div>
          <div class="pm-thumb"><img src="data:image/png;base64,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"/></div>
        </label>
      </div>
      <div class="pm-item">
        <input id="mcc" type="radio" name="payment-method" checked="checked"/>
        <label class="pm-label" for="mcc">
          <div class="pm-text">
            <h5>Credit Card</h5>
            <p>Safe money transfer using your bank account. Safe payment online. Credit card needed. Visa, Maestro, Discover, American Express</p>
          </div>
          <div class="pm-thumb"><img src="data:image/png;base64,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"/></div>
          <div class="pm-thumb"><img src="data:image/png;base64,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"/></div>
        </label>
      </div>
    </div>
    <div class="payment-input">
      <div class="form-group success">
        <label for="ccnum">Credit Card Number</label>
        <input class="form-control is-valid" id="ccnum" type="text" name="ccnum" value="4542 9931 9292 2293"/>
      </div>
      <div class="form-group half pr-3">
        <label for="ccmonth">Expiry Date</label>
        <div class="row mx-0">
          <div class="col-6 pl-0 pr-2">
            <select class="form-control" id="ccmonth">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
          </div>
          <div class="col-6 pl-2 pr-0">
            <select class="form-control" id="ccyear">
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
            </select>
          </div>
        </div>
      </div>
      <div class="form-group half pl-3">
        <label for="cccode">CVV Code <span class="question">?</span></label>
        <input class="form-control is-invalid" id="cccode" type="text" name="cccode"/>
      </div>
      <div class="form-group">
        <label for="ccname">Name on Card</label>
        <input class="form-control" id="ccname" type="text" name="ccname"/>
      </div>
    </div>
  </template>
</template>
<script setup>
  import { TradeStateEnum, useTradeState } from "@/views/trade/data";
  import { computed, unref } from "vue";

  const { handleBack, getTradeState } = useTradeState();
  const getShow = computed(() => unref(getTradeState) === TradeStateEnum.PAYMENT);
</script>


<style lang="css">
  @import url("https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-beta.2/css/bootstrap.css");
  @import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700");

  .payment {
    max-width: 36em;
    margin: 0 auto;
    background-color: white;
    color: #5e6977;
    border-radius: 0.3em;
    box-shadow: 0.2em 0.3em 0.8em -0.45em rgba(0, 0, 0, 0.2), 0 0.2em 0.5em 0 rgba(0, 0, 0, 0.08);
  }
  .payment-tabs {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 2em;
    padding-right: 2em;
    border-bottom: 1px solid #e1e8ee;
    counter-reset: section;
  }
  .payment-tabs > a {
    padding: 1.35em 0;
    color: #bdc6cf;
    font-size: 0.9em;
    position: relative;
    transition: all 200ms ease-in-out;
  }
  .payment-tabs > a:before {
    counter-increment: section;
    content: counter(section);
    display: inline-block;
    width: 1.65em;
    height: 1.65em;
    margin-right: 0.5em;
    border: 0.15em solid #e1e8ee;
    color: #bdc6cf;
    font-size: 0.85em;
    text-align: center;
    line-height: 1.45em;
    border-radius: 50%;
    transition: all 300ms ease-in-out;
  }
  .payment-tabs > a:after {
    content: "";
    display: block;
    border-bottom: 2px solid transparent;
    position: absolute;
    left: 0;
    right: 0;
    bottom: -1px;
  }
  .payment-tabs > a:hover {
    text-decoration: none;
    color: #91a0af;
  }
  .payment-tabs > a:hover:before {
    border-color: #91a0af;
    color: #91a0af;
  }
  .payment-tabs > a.active {
    color: #358ed7;
    font-weight: 500;
  }
  .payment-tabs > a.active:before {
    border-color: #358ed7;
    color: inherit;
  }
  .payment-tabs > a.active:after {
    border-bottom: 2px solid #358ed7;
  }
  .payment-customer {
    display: none;
  }
  .payment-method h2 {
    margin: 0;
    padding: 1.8em 2em;
    font-size: 1.2em;
    line-height: 1.2;
    color: #5e6977;
  }
  .payment-method .pm-item {
    position: relative;
  }
  .payment-method .pm-item:last-child:after {
    content: "";
    display: block;
    height: 0.125em;
    background-color: #e1e8ee;
    position: absolute;
    left: 2em;
    right: 2em;
  }
  .payment-method .pm-label {
    display: flex;
    margin-bottom: 0;
    padding: 1.5rem 2rem;
    cursor: pointer;
    background-color: #f6f7f9;
  }
  .payment-method .pm-text {
    padding-left: 2.5em;
    position: relative;
  }
  .payment-method .pm-text:before {
    content: "";
    display: block;
    width: 1.5em;
    height: 1.5em;
    background: #e1e8ee;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 50%;
    box-shadow: 0 0.08rem 0 rgba(20, 28, 35, 0.25) inset;
  }
  .payment-method .pm-text h5 {
    padding-top: 0.25em;
    font-size: 1em;
  }
  .payment-method .pm-text p {
    margin-bottom: 0;
    color: #86939e;
  }
  .payment-method .pm-thumb {
    padding-left: 0.9em;
  }
  .payment-method input[type=radio] {
    display: none;
  }
  .payment-method input[type=radio]:checked + .pm-label {
    background: none;
  }
  .payment-method input[type=radio]:checked + .pm-label .pm-text:before {
    background: radial-gradient(white 0%, white 33%, #7dc855 38%, #7dc855 100%);
  }
  .payment-input {
    display: flex;
    flex-wrap: wrap;
    padding: 2em;
  }
  .payment-input label {
    margin-bottom: 0.3em;
    color: #697685;
    font-size: 0.9em;
  }
  .payment-input select {
    height: 2.5rem !important;
    padding-right: 2em;
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAGCAYAAAARx7TFAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCQTA3RjE4NkQ0NkExMUU3QTM3RkRFQjFEOEY3MDM4RSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCQTA3RjE4N0Q0NkExMUU3QTM3RkRFQjFEOEY3MDM4RSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkJBMDdGMTg0RDQ2QTExRTdBMzdGREVCMUQ4RjcwMzhFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkJBMDdGMTg1RDQ2QTExRTdBMzdGREVCMUQ4RjcwMzhFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+OpMgKgAAAGJJREFUeNpijMssz2VgYDAB4m9AzMiAAP+BmAuIz7AAiWAgtmfADeSYgEQGED/EoQAknglSdAOII4D4C5qCL1DxG0xQgRNA7AHEn6D8T1A+SJyBCUnnUaj7dkPpozAJgAADABogEzO2aGVBAAAAAElFTkSuQmCC");
    background-color: #e1e8ee;
    background-repeat: no-repeat;
    background-position: calc(100% - 1em) center;
    -webkit-appearance: none;
  }
  .payment-input .form-control {
    border-width: 2px;
  }
  .payment-input .form-control:not(.is-valid):not(.is-invalid) {
    border-color: #e1e8ee;
  }
  .payment-input .form-control:focus {
    box-shadow: none;
  }
  .payment-input .form-control.is-valid, .payment-input .form-control.is-invalid {
    background-position: calc(100% - 1.1em) center;
    background-repeat: no-repeat;
  }
  .payment-input .form-control.is-valid {
    border-color: #7dc855;
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAJCAYAAADpeqZqAAAABGdBTUEAALGPC/xhBQAAAQ5JREFUGBmNUDtOw0AQnTcBiS4n4BgxVEh0NDQg2xUdFQoFEkIoks064IaKJhSkoAAJbN+AE9jbcg6OkJ3MGhwZKUJMMfvmze/Ngv5paR2eCJATcMy+p5Rw8FdvasNYiJ5JZJucqzito/1PS19pE92sazQ2PiJHr5prBwM0ZyF5IaGhiJikiSb9xtRGhwuRd92y4Xkm3E13qpwH4AkA1xaL5EkdXXpsbHiggyqVtOljBu6z3TLxGN6ZJj5dkHvSjW2s/gOCPVWx5fPMeMiC8sJjb99FChIbn+mRs5btOTBm06Ac9yiV+WO3QfGoM1fTPA3CPBsV511N9642dUTShGOVea2S3syouNJ79R9+2xLcA1oZPdllOgAAAABJRU5ErkJggg==");
  }
  .payment-input .form-control.is-invalid {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAIAAAAmzuBxAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowOUZFMTU2OUQ0NjcxMUU3ODREMjk0RUU3NzEwMEVENCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowOUZFMTU2QUQ0NjcxMUU3ODREMjk0RUU3NzEwMEVENCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjA5RkUxNTY3RDQ2NzExRTc4NEQyOTRFRTc3MTAwRUQ0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjA5RkUxNTY4RDQ2NzExRTc4NEQyOTRFRTc3MTAwRUQ0Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+eFdNEwAAASBJREFUeNpi+HH91vOi2g+rN/1HBUARoDhQluXj8nVfD5/4evQkExcHr5crAxh83rr7Tc8Uhn//mXi4mXj9PFhEhYGc1819Xw8eA0oDydctfUARoDhQlhFo4M9rN58X1/99+w6ogy/Q+9P6rf++fGUWFpLsbWTXUgepAOr7fv7ym85Jv+49hNjCpiQvUp7HaagLZDNBhIAcXm83BhgAsiHSCBVAMz5v3QVXAWQDRRAqfl69+bKqFWgF0B0CsWFAEsgGigDFQUq+nb143zP8jqnrXQuPLweOAp0FJIFsoAhQHCjLnCep+OPiVQYmRrHaYh5XB5AzFWRZJMW/Hj7+/+t3hn//WPgjAv9+/Mxlbcbr7YrkUtd/3398O3oKKAsQYABi9qDVgBM2nAAAAABJRU5ErkJggg==");
  }
  .payment-input .form-group {
    flex: 1 1 100%;
  }
  .payment-input .form-group.half {
    flex: 1 1 50%;
  }

  @media (max-width: 479px) {
    .payment {
      margin-left: 0.5rem;
      margin-right: 0.5rem;
    }
    .payment-tabs {
      padding-left: 0.75rem;
      padding-right: 0.75rem;
    }
    .payment-tabs > a {
      font-size: 0.725rem;
    }
    .payment-tabs > a:before {
      display: block;
      margin: 0 auto;
    }
    .payment-method h2 {
      padding: 0.75rem;
      font-size: 1em;
    }
    .payment-method .pm-label {
      flex-wrap: wrap;
      padding-left: 0.75rem;
      padding-right: 0.75rem;
    }
    .payment-method .pm-text, .payment-method .pm-thumb {
      padding-left: 2.25em;
    }
    .payment-method .pm-text {
      flex: 1 1 100%;
    }
    .payment-method .pm-thumb {
      flex: 0 0 auto;
      align-self: center;
      margin-top: 0.35em;
    }
    .payment-method .pm-thumb + .pm-thumb {
      padding-left: 1.25em;
    }
    .payment-input {
      padding-left: 0.75rem;
      padding-right: 0.75rem;
    }
    .payment-input .form-group.half {
      flex: 1 1 100%;
      padding-left: 0 !important;
      padding-right: 0 !important;
    }
  }
</style>
