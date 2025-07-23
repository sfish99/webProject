<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

// פרטי ההתחברות למסד הנתונים
$host = "localhost";
$user = "ronbe2_user";
$pass = "ronbe2_user";
$db   = "ronbe2_project";

// התחברות למסד הנתונים
$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    http_response_code(500);
    echo "Connection failed: " . $conn->connect_error;
    exit();
}

// קבלת הנתונים מהטופס
$fname     = $_POST['fname']     ?? '';
$lname     = $_POST['lname']     ?? '';
$email     = $_POST['email']     ?? '';
$birthdate = $_POST['birthdate'] ?? '';
$gender    = $_POST['gender']    ?? '';
$phone     = $_POST['phone']     ?? '';
$password  = $_POST['password']  ?? '';
$agree     = isset($_POST['agree']) ? 1 : 0;

// הצפנת סיסמה
$hashedPassword = password_hash($password, PASSWORD_DEFAULT);

// שאילתה להכנסת נתונים
$sql = "INSERT INTO users (fname, lname, email, birthdate, gender, phone, password, agree)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sssssssi", $fname, $lname, $email, $birthdate, $gender, $phone, $hashedPassword, $agree);

// שליחת תגובה
if ($stmt->execute()) {
    echo "SUCCESS";
} else {
    http_response_code(500);
    echo "שגיאה בשמירה: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
