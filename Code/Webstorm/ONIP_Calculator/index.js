function calScore() {
    var score = 0;

    // 获取所有下拉菜单的选中值
    var visaStatus = document.getElementById("visa").value;
    var salaryStatus = document.getElementById("salary").value;
    var levelStatus = document.getElementById("level").value;
    var fieldStatus = document.getElementById("field").value;
    var expStatus = document.getElementById("exp").value;
    var clbStatus = document.getElementById("clb").value;
    var lanStatus = document.getElementById("lan").value;
    var regStatus = document.getElementById("reg").value;

    // 检查是否有任何未选择的选项
    if (visaStatus === "" || salaryStatus === "" || levelStatus === "" || fieldStatus === "" || expStatus === "" || clbStatus === "" || lanStatus === "" || regStatus === "") {
        window.alert("Please select all options before calculating your score.");
        return;  // 如果没有选择，停止函数执行
    }

    // 根据选择的工作/学习许可状态加分
    if (visaStatus === "visa_0") {
        score += 10;  // 有有效工作或学习许可加 10 分
    } else if (visaStatus === "visa_1") {
        score += 0;   // 没有有效工作或学习许可加 0 分
    }

    // 根据选择的收入历史加分
    if (salaryStatus === "salary_0") {
        score += 3;  // 年收入 $40k 或更多加 10 分
    } else if (salaryStatus === "salary_1") {
        score += 0;   // 年收入少于 $40k 加 0 分
    }

    // 根据选择的教育水平加分
    if (levelStatus === "level_0") {
        score += 10;  // PhD加10分
    } else if (levelStatus === "level_1") {
        score += 8;   // Masters加8分
    } else if (levelStatus === "level_2") {
        score += 6;   // Bachelors加6分
    } else if (levelStatus === "level_3") {
        score += 6;   // Graduate diploma加4分
    } else if (levelStatus === "level_4") {
        score += 5;   // Undergraduate diploma加2分
    } else if (levelStatus === "level_5") {
        score += 5;   // Apprenticeship加1分
    } else if (levelStatus === "level_6") {
        score += 0;   // Less than college加0分
    }

    // 根据选择的学习领域加分
    if (fieldStatus === "field_0") {
        score += 12;  // STEM/Health加10分
    } else if (fieldStatus === "field_1") {
        score += 6;   // Business and administration加7分
    } else if (fieldStatus === "field_2") {
        score += 0;   // Arts and humanities加5分
    }

    // 根据加拿大教育经验加分
    if (expStatus === "exp_0") {
        score += 10;  // More than one Canadian credential加10分
    } else if (expStatus === "exp_1") {
        score += 5;   // One Canadian credential加5分
    }

    // 根据语言能力加分
    if (clbStatus === "clb_0") {
        score += 10;  // CLB 9 or higher加10分
    } else if (clbStatus === "clb_1") {
        score += 6;   // CLB 8加8分
    } else if (clbStatus === "clb_2") {
        score += 4;   // CLB 7加6分
    } else if (clbStatus === "clb_3") {
        score += 0;   // CLB 6 or lower加4分
    }

    // 根据官方语言知识加分
    if (lanStatus === "lan_0") {
        score += 10;  // 2 Official Languages加10分
    } else if (lanStatus === "lan_1") {
        score += 5;   // 1 Official Language加5分
    }

    // 根据地区加分
    if (regStatus === "reg_0") {
        score += 10;  // Northern Ontario加10分
    } else if (regStatus === "reg_1") {
        score += 8;   // Other areas outside GTA加8分
    } else if (regStatus === "reg_2") {
        score += 3;   // Inside GTA (except Toronto)加5分
    } else if (regStatus === "reg_3") {
        score += 0;   // Toronto加2分
    } else if (regStatus === "reg_4") {
        score += 0;   // Credential completed without attending classes加5分
    }

    // 弹出总分
    window.alert("Your Score: " + score);
}

