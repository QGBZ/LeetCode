<template>
    <div class="page">
        <div class="questionTitle">Question Discription</div>
        <div class="questionContent">{{englishDescription1}}</div>
        <div class="questionContent">{{englishDescription2}}</div>
        <div class="questionExample">Example</div>
        <div class="questionContent"> Given nums = [2, 7, 11, 15], target = 9,<br>
            Because nums[0] + nums[1] = 2 + 7 = 9,<br>
            return [0, 1].
        </div>
        <div class="begin">当nums = [1, 2, 2, 7, 8, 11, 1, 15], target = 9 时</div>
        <div class="btnBlock">
            <div class="btn" @click="search(nums, target)">点击开始检索</div>
        </div>

        <div class="result">result</div>
        <div>{{resultArr}}</div>
    </div>
</template>

<script>

    export default {
        name: 'two',
        data() {
            return {
                nums: [1, 2, 2, 7, 8, 11, 1, 15],
                target: 9,
                englishDescription1: 'Given an array of integers, return indices of the two numbers such that they add up to a specific target.',
                englishDescription2: 'You may assume that each input would have exactly one solution, and you may not use the same element twice.',
                resultArr: null
            }
        },
        methods: {
            search(nums, target) {
                this.resultArr = this.twoSum(nums, target)
            },
            twoSum(nums, target) {
                let arr = [];
                for (let i = 0; i < nums.length; i++) {
                    let otherNum = target - nums[i];
                    if (nums.indexOf(otherNum) > -1) {
                        console.log(i, nums.indexOf(otherNum));
                        // 当返回的参数索引大于当前参数的索引，将返回的数据push到arr中
                        if (nums.indexOf(otherNum) > i) {
                            arr.push([i, nums.indexOf(otherNum)]);
                        }
                    }
                }
                // 将所有数组的第二个元素加入一个数组中，准备进行重复比对
                let newArr = [];
                for (let j = 0; j < arr.length; j++) {
                    newArr.push(arr[j][1])
                }
                // 将非重复的数组索引加入集合
                let indexArr = [];
                for (let k = 0; k < newArr.length; k++) {
                    if (newArr.indexOf(newArr[k]) === k) {
                        indexArr.push(newArr.indexOf(newArr[k]));
                    }
                }
                // 用上面得到的索引匹配之前获得的arr数组，将结果push到新数组中，进行输出
                let lastArr = [];
                for (let u = 0; u < indexArr.length; u++) {
                    lastArr.push(arr[u]);
                }
                return lastArr
            }
        }
    }
</script>
<style scoped>
    .page {
        position: relative;
        width: 90%;
        left: 5%;
    }

    .questionTitle {
        position: relative;
        width: 100%;
        text-align: center;
        color: #4e77ab;
        font-size: 24px;
        line-height: 24px;
        margin-bottom: 2vh;
    }

    .questionContent {
        color: #2c3e50;
    }

    .questionExample {
        position: relative;
        width: 100%;
        margin-top: 2vh;
        margin-bottom: 1vh;
    }

    .begin {
        position: relative;
        margin-top: 2vh;
        color: #42b983;
    }

    .btnBlock {
        position: relative;
        width: 100%;
        margin-top: 2vh;
        margin-bottom: 2vh;
    }

    .btn {
        position: relative;
        width: 15%;
        border: 1px solid #4e77ab;
        color: #4e77ab;
        border-radius: 5px;
        height: 5vh;
        line-height: 5vh;
        font-size: 18px;
        text-align: center;
        cursor: pointer;
    }

    .btn:hover {
        position: relative;
        width: 15%;
        background-color: #4e77ab;
        color: #f1f1f1;
        border-radius: 5px;
        height: 5vh;
        line-height: 5vh;
        font-size: 18px;
        text-align: center;
        cursor: pointer;
    }

    .result {
        color: #42b983;
        margin-bottom: 3vh;
    }
</style>
