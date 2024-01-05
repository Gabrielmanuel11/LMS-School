<?php

if(isset($_POST['submit'])) {
    $to = 'projetobeeinternational@gmail.com'; // endereço de email de destino
    $subject = 'Nova mensagem de contato'; // assunto do email
    $name = $_POST['name']; // nome do remetente
    $email = $_POST['email']; // endereço de email do remetente
    $message = $_POST['message']; // mensagem

    // monta o corpo do email
    $body = "De: $name\n E-mail: $email\n Mensagem:\n $message";

    // configura os headers do email
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // envia o email
    if(mail($to, $subject, $body, $headers)) {
        echo 'Mensagem enviada com sucesso!';
    } else {
        echo 'Falha ao enviar mensagem.';
    }
}
