/* Generate integer that in [m,n], if m > n return 0 */
function rand(m, n) {
  if (m > n)
    return 0;
  else
    return Math.round(Math.random() * (n - m) + m);
}