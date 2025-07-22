<?php
$host = "localhost";
$user = "ronbe2_user";
$pass = "ronbe2_user";
$db = "ronbe2_project";

// התחברות למסד הנתונים
$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// קבלת הנתונים מהטופס
$fname = $_POST['fname'];
$lname = $_POST['lname'];
$email = $_POST['email'];
$birthdate = $_POST['birthdate'];
$gender = $_POST['gender'];
$phone = $_POST['phone'];
$password = $_POST['password'];
$agree = isset($_POST['agree']) ? 1 : 0;

// הוספה לטבלה
$sql = "INSERT INTO users (fname, lname, email, birthdate, gender, phone, password, agree)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sssssssi", $fname, $lname, $email, $birthdate, $gender, $phone, $password, $agree);

// ביצוע ושליחת הודעה מתאימה
if ($stmt->execute()) {
    echo "
    <script>
        const user = {
            fname: " . json_encode($fname) . ",
            lname: " . json_encode($lname) . ",
            email: " . json_encode($email) . ",
            birthdate: " . json_encode($birthdate) . ",
            gender: " . json_encode($gender) . ",
            phone: " . json_encode($phone) . ",
            agree: " . json_encode($agree) . "
        };
        localStorage.setItem('user', JSON.stringify(user));
        window.location.href = 'profile.html';
    </script>";
} else {
    echo "<h2 style='color:red;text-align:center;'>קרתה שגיאה בהרשמה.</h2>";
}

$stmt->close();
$conn->close();
?>