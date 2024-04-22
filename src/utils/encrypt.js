import jsencrypt from 'jsencrypt'
const publicKey =
    `-----BEGIN PUBLIC KEY-----
    MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAxT0xV0Wcv1SCLhSsS6N2
    Y5KmCkuetNg0qK+Dc4FYAmGsVNQRkfThY10Yh9J1ns0J3l4fqhepnfPJ70tB+35V
    j3pq0yu+J8o+EivekADqydHmdqRuUFbJRfrevb1sTeSr4r20B9Pcc7hAzRthPDDj
    KiEwT8C/XgMTsLb0z1Dx707cGduqtTSYGVOaU/9NA9JkQEC9VM4e8jh3yCD8INbA
    a+srJnG2TRFzD6JM0N8O7VeLFuw+Jyg/Ud925MoyxhS4OaxOZ/jaaBSpKW6o4PsO
    ZcYk0iiovUoOCULim9V9t3w4E4pZb4cr7LaQJtW8CXMSDBo8XtdgDmjGLTWBqhXz
    XQIDAQAB
    -----END PUBLIC KEY-----
    `
const privateKey =
    `-----BEGIN RSA PRIVATE KEY-----
    MIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDFPTFXRZy/VIIu
    FKxLo3ZjkqYKS5602DSor4NzgVgCYaxU1BGR9OFjXRiH0nWezQneXh+qF6md88nv
    S0H7flWPemrTK74nyj4SK96QAOrJ0eZ2pG5QVslF+t69vWxN5KvivbQH09xzuEDN
    G2E8MOMqITBPwL9eAxOwtvTPUPHvTtwZ26q1NJgZU5pT/00D0mRAQL1Uzh7yOHfI
    IPwg1sBr6ysmcbZNEXMPokzQ3w7tV4sW7D4nKD9R33bkyjLGFLg5rE5n+NpoFKkp
    bqjg+w5lxiTSKKi9Sg4JQuKb1X23fDgTillvhyvstpAm1bwJcxIMGjxe12AOaMYt
    NYGqFfNdAgMBAAECggEBAIt8Mgeg8DASyJlj/1Digdf7HrdLMSp9eAgPT2wA/cd5
    YZEABIju3/IQJUfwW0P5htAeSlBUuZw9iwJSe5AqkMGN9jvuxGSJTwo0wgmezGv7
    p/shX+4q4d4+gwU2D4CqhbAtLkMW3eFsXU9v3Hzfqdbib7MHAY6vqF4hlNGEUgRE
    x2neK1UV5R/j1CpOOZxkJhOaLUFpsA2fsjQrvXrvKaHiZBVGkyK3JtYYrXtKhq4I
    m+te/sy6f0WEW0fXhnDcQn+hZcCixKaiKCeQR7yym8qsljV8DaIiYGnhl7DQsUpd
    zA6zVys8ch7Dn6UWXk3aDf8P7o3r0hU3KK0IJudG70ECgYEA7annWMj7YwXw4Hue
    vjb8h9gTUqTSv55nOFA05zL/Jb6e8fL9UpIsLscvtWjaSy6aMegKZy69860VKEm+
    PY+9cHLcclZRLQ1QLdrl1FmkYzf4C723+GU3ckFotiI5FvW5y8PWBPlEpfseuj1t
    KAXk2+9ZtGl616QR+mI+QjKDJNECgYEA1HTckVCsapg3XDnPegihEHTsoyguIwIu
    QSG7pzdyC4oVwYHrJ5ldtGd4dx2mRJQsbsktcfULUWpuM/V9iudk/OOQBwJE3syW
    O/EwikPAHyCzfHQiXqkltiHR3mF+NYZvoNUAhy0O8TzPB7mHwaddj49fJcGMaTZw
    PPa8Qbq3+M0CgYEAjgzGNP/zmS0c2t+ocuKkr4ELk5LmUBeadEMkS6fkbqfvkod8
    t9ScSd1N+6zPBK63BOs/BIsgh7vE8I6bAWqffM16S3CiFj5l1PKH+hMWOSNjw4jC
    o9nDeSv1LR9pZfq68Tp8+f4O9PISXJiIXKqhLn9x6248ORVclX4Q3joYvnECgYAG
    5TAPa03dO8l4LcwlCsinbxQLC4/LxRNZO84KVEtYQogIOr42D80xwLXxL74otaJn
    ihH2g9x1LP4co5gKfQ4TAxO2loVDseIiWeaYZjCDEh2hKWfAKL83lQtpq0JcXFud
    Hayhtn2oqK+TcZsNVvA7a4zL/ecftwuXfu6HN5cm9QKBgQCS2qD4dGiMRElbhiCj
    d2uKqIaQrVfcye/ztkPvSAtzIH7De7FPIjS/Hm3IxDvPkLMZ9hnvf5cc/tV8v8z1
    IXLXu9wiG5j7r3fB431/VkrvDvc9RzD35oxs2qvbAi3x+hmrJIuhcui0ZydxLxjk
    +En+x6hwDds4vxw5JToHa8VFyg==
    -----END RSA PRIVATE KEY-----
    `
// RSA加密
export function encryptRSA(text) {
    let encryptor = new jsencrypt()
    encryptor.setPublicKey(publicKey)
    return encryptor.encrypt(text)
}
// RSA解密
export function decryptRSA(text) {
    let decryptor = new jsencrypt()
    decryptor.setPrivateKey(privateKey)
    return decryptor.decrypt(text)
}