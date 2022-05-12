### Cookie

第一次请求无Cookie

1. 请求

2. Set-Cookie

3. 请求+Cookie(不同用户匹配不同内容)

   <4kb

   ```html
   <form>
       <label>用户名</label>
       <input type="username"></input>
       <label>密码</label>
       <input type="password"></input>
       <input type="checkbox" id="rememberMe"></input>
       <label for="rememberMe">记住我</label>
       <input type="submit" value="登录">
   </form>
    
   ```
   ```javascript
   <script>
        const username = document.querySelector('input[type="username"]');
       const checkbox = document.querySelector('input[type="checkbox"]');
       const submit = document.querySelector('input[type="submit"]');

       submit.addEventListener('click', e =>{
           if(checkbox.checked && username.value !=''){
               let key = 'username';
               let value = encodeURIComponent(username.value);
               let twoDays = 2*24*60*60;

               document.cookie = `${key} = ${value}; max-age = ${twoDays}`;
           }
           e.preventDefault(); 
       })
    </script>
   ```

   