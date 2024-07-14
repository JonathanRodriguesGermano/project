<?php
// Verificar se os dados foram enviados via post
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    
    // dados do formulario 
    $nome = $_POST ['nome'];
    $email = $_POST ['email'];
    $assunto = $_POST ['assunto'];
    $mensagem = $_POST ['mensagem'];
    $recipiente = $_POST ['jhonjhoon_ofc@icloud.com'];

    // Corpo do email
    $email_body = "Name: %name\n\nEmail: $email\n\nAssunto: $assunto\n\nmensagem:\n$mensagem";

    // Config adicional
    $headers = "from: $name <$from>";

    // Enviar email
    if (mail($to, $subject, $email_body, $headers)) {
        // redirecionar para pagina de obrigado
        header("location: http://127.0.0.1:5500/obg.html");
        exit;
    } else {
        \\ verificar erro ao enviar email 
        echo "falha ao enviar email.";
    }
}