# CT Tracker

## Setup

1. Install Node https://nodejs.org/en/
2. Install Typescript `npm install -g typescript ts-node`
3. Clone repository `git clone https://github.com/vijayRT/cttracker.git`
4. Run `npm install`
5. To fetch data from Tracksino run `ts-node fetchData.ts`
6. Data is saved to file `data.json` in JSONLines format https://jsonlines.org/

## Understanding data

### General Spin
```
{
    "round_code": "cdHphY2ocfhU",
    "when": 1621999851,
    "result": 1,
    "slot_result": 1,
    "slot_multiplier": 2,
    "multiplier": 2,
    "total_winners": 448,
    "total_payout": 2849.89,
    "video_uid": ""
}
```

* `when`: timestamp
* `slot_result`: Top slot result
* `slot_multiplier`: Top slot multiplier
* `result`: Wheel result
* `multiplier`: Multiplier on wheel result

| `result` value | Corresponding result |
| ------------- |:-------------:|
|1|1|
|2|2|
|3|3|
|4|4|
|100| Cash Hunt|
|200|Pachinko|
|300| Coin Flip|
|400|Crazy Time|

### Cash Hunt

```
{
    "round_code": "cdHphY2ocfn0",
    "when": 1621999221,
    "result": 100,
    "slot_result": 400,
    "slot_multiplier": 4,
    "total_winners": 1260,
    "total_payout": 69167.76,
    "video_uid": "cdHphY2ocfn0",
    "max_multiplier": 500,
    "min_multiplier": 5,
    "avg_multiplier": 19
}
```

* `max_multiplier`: Highest Cash Hunt multiplier
* `min_multiplier`: Lowest Cash Hunt multiplier

### Pachinko

```
{
    "round_code": "cdHphY2ocfpU",
    "when": 1622000694,
    "result": 200,
    "slot_result": 200,
    "slot_multiplier": 2,
    "multiplier": 140,
    "total_winners": 985,
    "total_payout": 76992.1,
    "video_uid": "cdHphY2ocfpU"
}
```

* `multiplier`: Pachinko result * Top slot multiplier

### Coin Flip

```
{
    "round_code": "cdHphY2occXU",
    "when": 1622000935,
    "result": 300,
    "slot_result": 400,
    "slot_multiplier": 4,
    "multiplier": 8,
    "total_winners": 914,
    "total_payout": 8015,
    "video_uid": "cdHphY2occXU",
    "headtail": 2
}
```

* `headtail`: Red = 1, Blue = 2

### Crazy Time

```
{
    "round_code": "cdHphY2ocfjU",
    "when": 1621999665,
    "result": 400,
    "slot_result": 10,
    "slot_multiplier": 3,
    "total_winners": 1092,
    "total_payout": 58951.04,
    "video_uid": "cdHphY2ocfjU",
    "left_multiplier": 40,
    "top_multiplier": 20,
    "right_multiplier": 35
}
```

* `left_multiplier`: Green flapper
* `top_multiplier`: Blue flapper
* `right_multiplier`: Yellow flapper  