<!-- ELUCENIA technical documentation · escore-de-villalta · zh · no clinical/professional/rights approval -->

# Villalta 评分

[条件、来源与许可](https://elucenia.org/zh/tools/escore-de-villalta)

## 使用方法

在门户中使用工具，或通过本地 HTTP 服务器打开 index.html。选择语言，填写各字段，然后计算。

## 输入与单位

### 症状：疼痛

`dor`

- `0` — 无
- `1` — 轻度
- `2` — 中度
- `3` — 重度

### 症状：肌痉挛

`caibras`

- `0` — 无
- `1` — 轻度
- `2` — 中度
- `3` — 重度

### 症状：腿部沉重感

`peso`

- `0` — 无
- `1` — 轻度
- `2` — 中度
- `3` — 重度

### 症状：感觉异常

`parestesia`

- `0` — 无
- `1` — 轻度
- `2` — 中度
- `3` — 重度

### 症状：瘙痒

`prurido`

- `0` — 无
- `1` — 轻度
- `2` — 中度
- `3` — 重度

### 体征：胫前水肿

`edema`

- `0` — 无
- `1` — 轻度
- `2` — 中度
- `3` — 重度

### 体征：皮肤硬结

`induracao`

- `0` — 无
- `1` — 轻度
- `2` — 中度
- `3` — 重度

### 体征：色素沉着

`hiperpig`

- `0` — 无
- `1` — 轻度
- `2` — 中度
- `3` — 重度

### 体征：发红

`rubor`

- `0` — 无
- `1` — 轻度
- `2` — 中度
- `3` — 重度

### 体征：静脉扩张

`ectasia`

- `0` — 无
- `1` — 轻度
- `2` — 中度
- `3` — 重度

### 体征：挤压小腿疼痛

`dor_compr`

- `0` — 无
- `1` — 轻度
- `2` — 中度
- `3` — 重度

### 患侧下肢静脉性溃疡

`ulcera`

- `0` — 否
- `1` — 是

## 方法版本

Villalta/ISTH定义2009：5症状+6体征，各0–3，总计0–33；溃疡加重分级

## 已记录的公式

5项症状和6项体征各计0（无）、1（轻）、2（中）或3（重）。总分0至33。

≥5分或有静脉性溃疡时为血栓后综合征。严重度：5–9轻度；10–14中度；≥15或溃疡=重度。

## 限制与适用人群

ISTH推荐的血栓后综合征评估考虑曾受深静脉血栓形成（DVT）影响肢体的体征和症状，并承认不存在单一客观参考标准检查。需要明确评估时间、其他可能病因及所用版本的标准；单独求和不能确认水肿或疼痛的病因。

## 参考文献

- [Kahn SR et al. Definition of post-thrombotic syndrome of the leg for use in clinical investigations: a recommendation for standardization. J Thromb Haemost, 2009.](https://doi.org/10.1111/j.1538-7836.2009.03294.x)

## 复现技术测试

在此仓库的根目录中运行 node test.cjs，以重复已记录的合成案例。原始输入、预期结果和容差保持不变。技术测试不构成临床验证。

```sh
node test.cjs
```

tool.json 包含来源、版本和审查范围。examples.json 保留合成输入与预期结果；results.json 记录实际得到的结果。

[记录与参考文献](../tool.json) · [JavaScript代码](../calculator.js) · [参考案例](../examples.json) · [results.json](../results.json)

## 审查与使用条件

尚未开展独立临床审查。

此界面为自主编写的翻译，并非官方或认证版本。尚未完成独立临床审查、专业语言审查或工具权利授权。

公式或分类结果。解释、处理及适用性须结合专业评估和所选来源。

## 许可与署名

Apache-2.0 仅适用于 ELUCENIA 代码。工具、出版物、翻译和数据的权利仍归各自权利人所有。请保留 LICENSE 和 NOTICE。

ELUCENIA · Felipe Guedes · Copyright © 2026
